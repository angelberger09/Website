export function NextStepBand({ eyebrow, title, description, steps = [] }) {
  return (
    <section className="link-card wide-card continuity-band" aria-labelledby="continuity-title">
      <p className="eyebrow">{eyebrow}</p>
      <h1 id="continuity-title">{title}</h1>
      <p>{description}</p>
      <div className="continuity-list">
        {steps.map((step) => (
          <a className="continuity-link" href={step.href} key={step.title}>
            <span className="continuity-link__eyebrow">{step.eyebrow}</span>
            <strong>{step.title}</strong>
            <small>{step.description}</small>
          </a>
        ))}
      </div>
    </section>
  );
}
