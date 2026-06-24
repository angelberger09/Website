"use client";

import { useEffect, useMemo, useState } from "react";
import { PAGES_BASE, RAW_BASE } from "../../site-data";

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

  throw new Error("Post content could not be loaded.");
}

async function fetchJsonWithFallback(urls) {
  for (const url of urls) {
    try {
      const response = await fetch(url, { cache: "no-store" });
      if (response.ok) return await response.json();
    } catch {}
  }

  throw new Error("Post profile could not be loaded.");
}

export default function PostReaderClient({ backHref = "/Website/notes/", backLabel = "Back to Notes", contextLabel = "Still Here Notes" }) {
  const [state, setState] = useState({ status: "loading", profile: null, markdown: "", error: null });

  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("slug");
    if (!slug) {
      setState({ status: "error", profile: null, markdown: "", error: "Missing post slug." });
      return;
    }

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
      .then(([profile, markdown]) => setState({ status: "ready", profile, markdown, error: null }))
      .catch((error) => setState({ status: "error", profile: null, markdown: "", error: error.message }));
  }, []);

  const html = useMemo(() => markdownToHtml(state.markdown), [state.markdown]);

  return (
    <main id="top" className="site-shell readable-shell">
      <p className="eyebrow">{contextLabel}</p>
      <article className="link-card reader-card">
        <p><a href={backHref}>{backLabel}</a></p>
        {state.status === "loading" && <p>Loading note from the public Blog source...</p>}
        {state.status === "error" && <p>{state.error}</p>}
        {state.profile && (
          <>
            <p className="eyebrow inline">{state.profile.series || state.profile.category}</p>
            <h1>{state.profile.title}</h1>
            <p>{state.profile.subtitle || state.profile.excerpt}</p>
            <div className="tag-row">
              <span>{state.profile.category}</span>
              <span>{state.profile.date}</span>
            </div>
            <div className="markdown-body" dangerouslySetInnerHTML={{ __html: html }} />
          </>
        )}
      </article>
    </main>
  );
}
