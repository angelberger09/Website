export default function HomePage() {
  return (
    <main className="site-shell">
      <p className="eyebrow">Deploy test</p>
      <section className="hero-card" aria-labelledby="site-title">
        <h1 id="site-title">Soft Strange Studio</h1>
        <p>
          The public Next.js site is building to a static dist folder and deploying
          from GitHub Pages.
        </p>
        <div className="status-pill" aria-label="Deployment status">
          Static export ready
        </div>
      </section>
    </main>
  );
}
