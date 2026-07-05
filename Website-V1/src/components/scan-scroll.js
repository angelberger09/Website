const scanImages = [
  new URL("../../assets/scane01-alpha.png", import.meta.url).href,
  new URL("../../assets/scane02-alpha.png", import.meta.url).href,
  new URL("../../assets/scane03-alpha.png", import.meta.url).href,
  new URL("../../assets/scane04-alpha.png", import.meta.url).href,
  new URL("../../assets/scane05-alpha.png", import.meta.url).href,
  new URL("../../assets/scane06-alpha.png", import.meta.url).href,
];

const objectImages = [
  new URL("../../assets/YarnObject01_BlackBG-alpha.png", import.meta.url).href,
  new URL("../../assets/YarnObject02_BlackBG-alpha.png", import.meta.url).href,
  new URL("../../assets/YarnObject03_BlackBG-alpha.png", import.meta.url).href,
  new URL("../../assets/YarnObject04_BlackBG-alpha.png", import.meta.url).href,
  new URL("../../assets/YarnObject05_BlackBG-alpha.png", import.meta.url).href,
  new URL("../../assets/YarnObject06_BlackBG-alpha.png", import.meta.url).href,
  new URL("../../assets/YarnObject07_BlackBG-alpha.png", import.meta.url).href,
  new URL("../../assets/YarnObject08_BlackBG-alpha.png", import.meta.url).href,
];

const assetPools = {
  scane: scanImages,
  object: objectImages,
};

const scanScrollConfig = {
  offscreenMargin: 420,
  slots: [
    { pool: "scane", image: 0, clip: 0, layer: "under", side: "left", offsetVw: -21, yRatio: 0.02, size: 212, speed: 0.54, rotate: -11, opacity: 0.3, z: 1 },
    { pool: "object", image: 6, clip: 4, layer: "over", side: "right", offsetVw: -19, yRatio: 0.1, size: 128, speed: 0.44, rotate: 9, opacity: 0.34, z: 2 },
    { pool: "scane", image: 1, clip: 2, layer: "under", side: "left", offsetVw: -15, yRatio: 0.2, size: 286, speed: 0.48, rotate: 14, opacity: 0.22, z: 1 },
    { pool: "object", image: 2, clip: 1, layer: "under", side: "right", offsetVw: -14, yRatio: 0.31, size: 154, speed: 0.62, rotate: -18, opacity: 0.29, z: 3 },
    { pool: "scane", image: 5, clip: 1, layer: "over", side: "right", offsetVw: -23, yRatio: 0.4, size: 246, speed: 0.57, rotate: -7, opacity: 0.22, z: 1 },
    { pool: "object", image: 0, clip: 5, layer: "under", side: "left", offsetVw: -11, yRatio: 0.49, size: 116, speed: 0.68, rotate: 21, opacity: 0.36, z: 2 },
    { pool: "scane", image: 2, clip: 5, layer: "under", side: "left", offsetVw: -18, yRatio: 0.58, size: 162, speed: 0.66, rotate: 18, opacity: 0.24, z: 2 },
    { pool: "object", image: 4, clip: 3, layer: "over", side: "left", offsetVw: -8, yRatio: 0.67, size: 138, speed: 0.5, rotate: -13, opacity: 0.31, z: 3 },
    { pool: "scane", image: 4, clip: 3, layer: "under", side: "right", offsetVw: -13, yRatio: 0.75, size: 304, speed: 0.52, rotate: -15, opacity: 0.2, z: 1 },
    { pool: "object", image: 7, clip: 0, layer: "under", side: "right", offsetVw: -17, yRatio: 0.84, size: 176, speed: 0.59, rotate: 7, opacity: 0.33, z: 2 },
    { pool: "scane", image: 0, clip: 1, layer: "over", side: "left", offsetVw: -25, yRatio: 0.92, size: 236, speed: 0.6, rotate: 6, opacity: 0.2, z: 1 },
    { pool: "object", image: 5, clip: 2, layer: "over", side: "right", offsetVw: -10, yRatio: 0.98, size: 146, speed: 0.47, rotate: -6, opacity: 0.35, z: 2 },
  ],
};

function getTrack() {
  return (window.innerHeight || 1) + scanScrollConfig.offscreenMargin * 2;
}

function getY(slotConfig, scroll, track) {
  const baseY = slotConfig.yRatio * track;
  return ((baseY - scroll * slotConfig.speed) % track + track) % track - scanScrollConfig.offscreenMargin;
}

function makeSlot(slotConfig) {
  const image = document.createElement("img");
  image.className = `scan-scroll__image scan-scroll__image--${slotConfig.clip} scan-scroll__image--${slotConfig.pool}`;
  image.alt = "";
  image.decoding = "async";
  image.loading = "eager";
  image.setAttribute("aria-hidden", "true");
  const pool = assetPools[slotConfig.pool] ?? scanImages;
  image.src = pool[slotConfig.image % pool.length];
  image.style.setProperty("--scan-size", `${slotConfig.size}px`);
  image.style.setProperty("--scan-rotate", `${slotConfig.rotate}deg`);
  image.style.setProperty("--scan-opacity", String(slotConfig.opacity));
  image.style.left = slotConfig.side === "left" ? `${slotConfig.offsetVw}vw` : "auto";
  image.style.right = slotConfig.side === "right" ? `${slotConfig.offsetVw}vw` : "auto";
  image.style.zIndex = String(slotConfig.z);
  return image;
}

export function mountScanScroll() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const layers = {
    under: document.createElement("div"),
    over: document.createElement("div"),
  };

  const slots = scanScrollConfig.slots.map((slotConfig) => {
    const slot = makeSlot(slotConfig);
    layers[slotConfig.layer ?? "under"].append(slot);
    return { element: slot, config: slotConfig };
  });

  Object.entries(layers).forEach(([layerName, layer]) => {
    layer.className = `scan-scroll scan-scroll--${layerName}`;
    layer.setAttribute("aria-hidden", "true");
    document.body.prepend(layer);
  });

  let frame = 0;

  const update = () => {
    frame = 0;
    const scroll = window.scrollY || 0;
    const track = getTrack();

    slots.forEach(({ element, config }) => {
      element.style.setProperty("--scan-y", `${getY(config, scroll, track).toFixed(1)}px`);
    });
  };

  const requestUpdate = () => {
    if (frame) return;
    frame = window.requestAnimationFrame(update);
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  update();
}
