"use client";

import { useEffect, useState } from "react";

const INDEX_URLS = [
  "https://angelberger09.github.io/Blog/posts.json",
  "https://raw.githubusercontent.com/angelberger09/Blog/main/src/data/posts.json",
];

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
  throw new Error("Could not load the Blog posts index.");
}

export default function BlogPage() {
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
    <main className="site-shell readable-shell">
      <p className="eyebrow">Soft Strange Studio</p>
      <section className="link-card wide-card" aria-labelledby="blog-title">
        <p className="eyebrow inline">Website-owned route</p>
        <h1 id="blog-title">Still Here Notes</h1>
        <p>
          This page lives inside the main Website at /Website/blog/. It loads post
          profiles from the public Blog repo, then opens each note inside the Website reader.
        </p>
        {state.status === "loading" && <p>Loading public Blog index...</p>}
        {state.status === "error" && <p>{state.error}</p>}
        {state.source && <p className="source-note">Source: {state.source}</p>}
        <div className="post-list">
          {state.posts.map((post) => (
            <a className="source-link" href={`./post/?slug=${post.slug}`} key={post.slug}>
              <span>{post.title}</span>
              <small>{post.category} · {post.date}</small>
              <small>{post.excerpt}</small>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
