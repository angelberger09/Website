export function bindParallax() {
  const elements = [...document.querySelectorAll("[data-parallax]")];
  if (!elements.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  let frame = 0;

  const update = () => {
    frame = 0;
    const viewportHeight = window.innerHeight || 1;
    for (const element of elements) {
      const rect = element.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const distance = (center - viewportHeight / 2) / viewportHeight;
      const offset = Math.max(-1, Math.min(1, distance)) * 16;
      element.style.setProperty("--parallax-offset", `${offset}px`);
    }
  };

  const requestUpdate = () => {
    if (frame) return;
    frame = window.requestAnimationFrame(update);
  };

  update();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
}
