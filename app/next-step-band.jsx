const trailLabels = ["Next room", "Soft path"];

function getContinuityInitials(title = "Open") {
  return title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();
}

export function NextStepBand({ eyebrow, title, description, steps = [] }) {
  return (
    <section className="continuity-paper-trail" aria-labelledby="continuity-title">
      <div className="continuity-paper-trail__copy">
        <div className="continuity-paper-trail__map" aria-hidden="true">
          <span className="continuity-paper-trail__map-photo">
            <span>Room trail</span>
          </span>
          <span className="continuity-paper-trail__map-slip">Choose softly</span>
        </div>
        <p className="eyebrow">{eyebrow}</p>
        <h1 id="continuity-title">{title}</h1>
        <p>{description}</p>
      </div>
      <div className="continuity-paper-trail__steps" aria-label="Suggested next rooms">
        <span className="continuity-paper-thread" aria-hidden="true">Follow the thread</span>
        {steps.map((item, index) => (
          <a className="continuity-paper-step" href={item.href} key={item.title}>
            <span className="continuity-paper-step__photo" aria-hidden="true">
              <span className="continuity-paper-step__photo-initials">{getContinuityInitials(item.title)}</span>
              <span className="continuity-paper-step__photo-title">{item.title}</span>
            </span>
            <span className="continuity-paper-step__copy">
              <span className="continuity-paper-step__pin">{trailLabels[index] ?? "Open door"}</span>
              <span className="continuity-paper-step__eyebrow">{item.eyebrow}</span>
              <strong>{item.title}</strong>
              <small>{item.description}</small>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
