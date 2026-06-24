const publicBlogLinks = [
  {
    label: "Blog home",
    href: "https://angelberger09.github.io/Blog/",
    description: "The standalone public Astro blog."
  },
  {
    label: "Posts index",
    href: "https://angelberger09.github.io/Blog/posts/",
    description: "Human-readable post archive from the Blog repo."
  },
  {
    label: "posts.json feed",
    href: "https://angelberger09.github.io/Blog/posts.json",
    description: "Machine-readable feed the main website can use as its embedded notes source."
  },
  {
    label: "Example post content",
    href: "https://angelberger09.github.io/Blog/posts/learning-to-think-like-a-developer/content.md",
    description: "Markdown content endpoint for the embedded reader."
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
        <h2 id="blog-links-title">Embedded blog source links</h2>
        <p>
          These are the public Blog repo endpoints this website should read from
          when we build the full embedded Notes viewer.
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
