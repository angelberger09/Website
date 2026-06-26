"use client";

import { useEffect, useMemo, useState } from "react";
import { NextStepBand } from "../../next-step-band";
import { pageContinuity } from "../../page-continuity";
import { PAGES_BASE, RAW_BASE } from "../../site-data";

const postReaderIntroSlips = [
  {
    label: "Room",
    value: "Reader sheet"
  },
  {
    label: "Source",
    value: "Public shelf"
  },
  {
    label: "Return",
    value: "Notes room"
  }
];

const postReaderSupportCards = [
  {
    title: "Inside the studio",
    eyebrow: "Context",
    visualLabel: "room path",
    paperCue: "Studio room",
    description: "The note comes from the public writing shelf, but the reading surface keeps the same soft studio context as the rest of the rooms."
  },
  {
    title: "Published only",
    eyebrow: "Boundary",
    visualLabel: "public shelf",
    paperCue: "Public only",
    description: "The reader checks the public note profile and does not present drafts or unavailable writing as finished public work."
  },
  {
    title: "Clear way back",
    eyebrow: "Path",
    visualLabel: "return slip",
    paperCue: "Back path",
    description: "Missing, loading, and quiet-error states all point visitors back toward the notes index instead of leaving them at a dead end."
  },
  {
    title: "Paper reader sheet",
    eyebrow: "Material",
    visualLabel: "reader sheet",
    paperCue: "Paper sheet",
    description: "The post surface should read like a calm paper sheet in the studio, not a file viewer or technical endpoint."
  }
];

const readerPathNotes = [
  {
    eyebrow: "Read",
    title: "Stay with the sheet",
    visualLabel: "quiet sheet",
    description: "The note opens on a lined paper surface so the writing has room before any supporting path appears."
  },
  {
    eyebrow: "Return",
    title: "Back to Notes",
    visualLabel: "note stack",
    description: "The shelf keeps a visible way back to the public notes room when the reader wants the wider stack."
  },
  {
    eyebrow: "Continue",
    title: "Follow the studio trail",
    visualLabel: "soft trail",
    description: "After the note, the route reconnects to related rooms instead of ending like a loose article page."
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
  const postMetaSlips = useMemo(() => {
    if (!state.profile) return [];

    return [
      {
        label: "Shelf mark",
        value: state.profile.series || state.profile.category || "Public note"
      },
      {
        label: "Placed",
        value: state.profile.date || "Published shelf"
      },
      {
        label: "Reader path",
        value: state.slug ? "Open note" : "Notes room"
      }
    ];
  }, [state.profile, state.slug]);

  return (
    <main id="top" className="site-shell readable-shell notes-post-room">
      <section className="notes-post-desk" aria-labelledby="reader-intro-title">
        <div className="notes-post-desk__intro">
          <p className="eyebrow">{contextLabel}</p>
          <h1 id="reader-intro-title">A quiet reading sheet</h1>
          <p>
            Individual notes open as calm studio sheets so the writing stays connected
            to the same public room path as the rest of Soft Strange Studio.
          </p>
          <div className="notes-post-intro-receipts" aria-label="Reader room cues">
            {postReaderIntroSlips.map((slip) => (
              <span className="notes-post-intro-receipt" key={slip.label}>
                <small>{slip.label}</small>
                <strong>{slip.value}</strong>
              </span>
            ))}
          </div>
          <div className="notes-post-desk__photo-card" aria-hidden="true">
            <span className="notes-post-desk__photo-kicker">Reader room</span>
            <strong>Public note</strong>
            <i />
            <small>writing shelf</small>
          </div>
          <a className="notes-post-back" href={backHref}>{backLabel}</a>
        </div>

        <article className="notes-post-sheet">
          {state.status === "loading" && (
            <div className="notes-post-state">
              <p className="eyebrow inline">Loading</p>
              <p>Gathering the public note profile and writing sheet inside the studio reader...</p>
            </div>
          )}

          {state.status === "missing" && (
            <div className="notes-post-state">
              <p className="eyebrow inline">Choose a note</p>
              <p>{state.error}</p>
              <a href={backHref}>{backLabel}</a>
            </div>
          )}

          {state.status === "error" && (
            <div className="notes-post-state notes-post-state--error">
              <p className="eyebrow inline">Reader note</p>
              <p>{state.error}</p>
              <a href={backHref}>Return to the notes index</a>
            </div>
          )}

          {state.profile && (
            <>
              <p className="notes-post-kicker">{state.profile.series || state.profile.category || "Public note"}</p>
              <h1>{state.profile.title}</h1>
              <p className="notes-post-subtitle">{state.profile.subtitle || state.profile.excerpt}</p>
              <div className="tag-row notes-post-tags">
                {state.profile.category && <span>{state.profile.category}</span>}
                {state.profile.date && <span>{state.profile.date}</span>}
                {state.slug && <span>public note</span>}
              </div>
              <div className="notes-post-receipt-strip" aria-label="Note reader details">
                {postMetaSlips.map((slip) => (
                  <div className="notes-post-receipt-slip" key={slip.label}>
                    <span>{slip.label}</span>
                    <strong>{slip.value}</strong>
                  </div>
                ))}
              </div>
              <div className="markdown-body notes-post-markdown" dangerouslySetInnerHTML={{ __html: html }} />
            </>
          )}
        </article>
      </section>

      <section className="notes-post-path-shelf" aria-label="Reader path">
        {readerPathNotes.map((note) => (
          <article className="notes-post-path-note" key={note.title}>
            <div className="notes-post-path-note__visual" aria-hidden="true">
              <i />
              <strong>{note.visualLabel}</strong>
            </div>
            <span>{note.eyebrow}</span>
            <h2>{note.title}</h2>
            <p>{note.description}</p>
          </article>
        ))}
      </section>

      <section className="notes-post-support-board" aria-label="Post reader support">
        <div className="notes-post-source-slip">
          <span>Writing shelf</span>
          <strong>Public writing first</strong>
          <p>Each reader state keeps the note honest, published, and connected back to the studio notes room.</p>
        </div>

        {postReaderSupportCards.map((card) => (
          <article className="notes-support-note notes-post-support-note" key={card.title}>
            <span className="notes-support-note__photo" aria-hidden="true">
              <span>{card.visualLabel}</span>
            </span>
            <span className="notes-post-support-note__cue">{card.paperCue}</span>
            <span className="notes-support-note__pin">{card.eyebrow}</span>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </article>
        ))}
      </section>

      <NextStepBand {...pageContinuity.notePost} />
    </main>
  );
}
