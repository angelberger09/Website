"use client";

import { useEffect, useMemo, useState } from "react";

const PAGES_BASE = "https://angelberger09.github.io/Blog";
const RAW_BASE = "https://raw.githubusercontent.com/angelberger09/Blog/main/src";

function markdownToHtml(markdown) {
  return markdown
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => {
      if (block.startsWith("# ")) return `<h2>${block.slice(2)}</h2>`;
      if (block.startsWith("## ")) return `<h3>${block.slice(3)}</h3>`;
      return `<p>${block.replaceAll("\n", "<br />")}</p>`;
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

export default function BlogPostPage() {
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
    <main className="site-shell readable-shell">
      <p className="eyebrow">Still Here Notes</p>
      <article className="link-card reader-card">
        <p><a href="../">Back to Blog</a></p>
        {state.status === "loading" && <p>Loading note from the Blog repo...</p>}
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
