export function NextStepBand({ eyebrow, title, description, steps = [] }) {
  return (
    <section className="link-card wide-card" aria-labelledby="continuity-title">
      <p className="eyebrow">{eyebrow}</p>
      <h1 id="continuity-title">{title}</h1>
      <p>{description}</p>
      <div className="pathway-list">
        {steps.map((item) => (
          <a className="pathway-link" href={item.href} key={item.title}>
            <span>{item.eyebrow} — {item.title}</span>
            <small>{item.description}</small>
          </a>
        ))}
      </div>
    </section>
  );
}
