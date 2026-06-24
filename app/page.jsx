const publicBlogLinks = [
  {
    label: "Blog repo",
    href: "https://github.com/angelberger09/Blog",
    description: "Working public source repo while GitHub Pages is not serving /Blog yet."
  },
  {
    label: "Posts data source",
    href: "https://github.com/angelberger09/Blog/blob/main/src/data/posts.json",
    description: "The committed post index that the Astro site uses to build posts.json."
  },
  {
    label: "Raw posts data",
    href: "https://raw.githubusercontent.com/angelberger09/Blog/main/src/data/posts.json",
    description: "A working raw JSON URL the main website can read before Pages is live."
  },
  {
    label: "Example markdown source",
    href: "https://github.com/angelberger09/Blog/tree/main/posts/learning-to-think-like-a-developer",
    description: "The example post folder with profile.json and content.md."
  }
];

export default function HomePage() {
  return (
    <main className="site-shell">
      <p className="eyebrow">Soft Strange Studio</p>
      <section className="hero-card" aria-labelledby="site-title">
        <h1 id="site-title">Soft Strange Studio</h1>
        <p>
          The public Next.js site is now set up as the viewer shell for public data
          from the Blog, Portfolio, and Store repos.
        </p>
        <div className="status-pill" aria-label="Deployment status">
          Next static export ready
        </div>
      </section>

      <section className="link-card" aria-labelledby="blog-links-title">
        <p className="eyebrow inline">Public Blog feed</p>
        <h2 id="blog-links-title">Working blog source links</h2>
        <p>
          The GitHub Pages URL for /Blog is currently returning 404, so this site
          now points to working public GitHub and raw data links until Pages is enabled.
        </p>
        <div className="link-grid">
          {publicBlogLinks.map((link) => (
            <a className="source-link" href={link.href} key={link.href}>
              <span>{link.label}</span>
              <small>{link.description}</small>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
