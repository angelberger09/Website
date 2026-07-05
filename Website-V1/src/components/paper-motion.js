export function bindPaperMotion() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let frame = 0;

  const update = () => {
    frame = 0;
    const scroll = window.scrollY || 0;
    document.documentElement.style.setProperty("--scroll-shift", `${Math.min(140, scroll * 0.07).toFixed(2)}px`);
  };

  const requestUpdate = () => {
    if (frame) return;
    frame = window.requestAnimationFrame(update);
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);

  update();
}
