const trailLabels = ["Next room", "Soft path"];

export function NextStepBand({ eyebrow, title, description, steps = [] }) {
  return (
    <section className="continuity-paper-trail" aria-labelledby="continuity-title">
      <div className="continuity-paper-trail__copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1 id="continuity-title">{title}</h1>
        <p>{description}</p>
      </div>
      <div className="continuity-paper-trail__steps" aria-label="Suggested next rooms">
        <span className="continuity-paper-thread" aria-hidden="true">Follow the thread</span>
        {steps.map((item, index) => (
          <a className="continuity-paper-step" href={item.href} key={item.title}>
            <span className="continuity-paper-step__pin">{trailLabels[index] ?? "Open door"}</span>
            <span className="continuity-paper-step__eyebrow">{item.eyebrow}</span>
            <strong>{item.title}</strong>
            <small>{item.description}</small>
          </a>
        ))}
      </div>
    </section>
  );
}
