function sceneImage({
  width = 1600,
  height = 1000,
  mode = "banner",
  bgA = "#0f0c0a",
  bgB = "#1d1612",
  glowA = "#f1b45f",
  glowB = "#6e907b",
  glowC = "#b86f3f",
  panel = "rgba(12, 10, 9, 0.72)",
  line = "rgba(255, 243, 223, 0.14)",
  accent = "rgba(255, 243, 223, 0.24)",
  accentStrong = "rgba(255, 243, 223, 0.42)",
}) {
  const panelRect =
    mode === "portrait"
      ? {
          x: width * 0.12,
          y: height * 0.1,
          w: width * 0.56,
          h: height * 0.74,
        }
      : mode === "square"
        ? {
            x: width * 0.1,
            y: height * 0.12,
            w: width * 0.72,
            h: height * 0.68,
          }
        : {
            x: width * 0.1,
            y: height * 0.16,
            w: width * 0.72,
            h: height * 0.54,
          };

  const insets = mode === "portrait" ? 0.08 : mode === "square" ? 0.12 : 0.09;
  const barHeight = Math.max(20, Math.round(height * (mode === "portrait" ? 0.12 : 0.08)));
  const ribbonWidth = Math.max(110, Math.round(width * (mode === "banner" ? 0.26 : 0.18)));
  const coreX = Math.round(width * 0.5);
  const coreY = Math.round(height * (mode === "portrait" ? 0.44 : 0.46));

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${bgA}" />
          <stop offset="55%" stop-color="${bgB}" />
          <stop offset="100%" stop-color="#050403" />
        </linearGradient>
        <radialGradient id="glow1" cx="32%" cy="24%" r="64%">
          <stop offset="0%" stop-color="${glowA}" stop-opacity="0.92" />
          <stop offset="48%" stop-color="${glowA}" stop-opacity="0.28" />
          <stop offset="100%" stop-color="${glowA}" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="glow2" cx="76%" cy="72%" r="56%">
          <stop offset="0%" stop-color="${glowB}" stop-opacity="0.82" />
          <stop offset="55%" stop-color="${glowB}" stop-opacity="0.26" />
          <stop offset="100%" stop-color="${glowB}" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="${accent}" stop-opacity="0" />
          <stop offset="45%" stop-color="${accent}" stop-opacity="0.78" />
          <stop offset="100%" stop-color="${accentStrong}" stop-opacity="0" />
        </linearGradient>
        <filter id="blur">
          <feGaussianBlur stdDeviation="${mode === "banner" ? 18 : 14}" />
        </filter>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix values="1 0 0 0 0
                                 0 1 0 0 0
                                 0 0 1 0 0
                                 0 0 0 0.12 0" />
        </filter>
      </defs>
      <rect width="100%" height="100%" fill="url(#bg)" />
      <rect width="100%" height="100%" filter="url(#grain)" opacity="0.18" />

      <g filter="url(#blur)">
        <ellipse cx="${width * 0.28}" cy="${height * 0.22}" rx="${width * 0.22}" ry="${height * 0.18}" fill="url(#glow1)" />
        <ellipse cx="${width * 0.82}" cy="${height * 0.74}" rx="${width * 0.26}" ry="${height * 0.22}" fill="url(#glow2)" />
        <ellipse cx="${width * 0.54}" cy="${height * 0.5}" rx="${width * 0.16}" ry="${height * 0.12}" fill="${glowC}" fill-opacity="0.2" />
      </g>

      <g opacity="0.95">
        <rect x="${Math.round(panelRect.x)}" y="${Math.round(panelRect.y)}" width="${Math.round(panelRect.w)}" height="${Math.round(panelRect.h)}" rx="${mode === "banner" ? 28 : 24}" fill="${panel}" stroke="rgba(255,255,255,0.08)" />
        <rect x="${Math.round(panelRect.x + panelRect.w * 0.06)}" y="${Math.round(panelRect.y + panelRect.h * 0.12)}" width="${ribbonWidth}" height="${barHeight}" rx="${Math.round(barHeight / 2)}" fill="rgba(255,255,255,0.06)" />
        <rect x="${Math.round(panelRect.x + panelRect.w * 0.14)}" y="${Math.round(panelRect.y + panelRect.h * 0.24)}" width="${Math.round(panelRect.w * 0.56)}" height="${Math.round(panelRect.h * 0.08)}" rx="${Math.round(panelRect.h * 0.04)}" fill="url(#lineGrad)" />
        <rect x="${Math.round(panelRect.x + panelRect.w * 0.08)}" y="${Math.round(panelRect.y + panelRect.h * 0.42)}" width="${Math.round(panelRect.w * 0.72)}" height="${Math.round(panelRect.h * 0.04)}" rx="${Math.round(panelRect.h * 0.02)}" fill="rgba(255,255,255,0.08)" />
        <rect x="${Math.round(panelRect.x + panelRect.w * 0.48)}" y="${Math.round(panelRect.y + panelRect.h * 0.18)}" width="${Math.round(panelRect.w * 0.12)}" height="${Math.round(panelRect.h * 0.54)}" rx="${Math.round(panelRect.w * 0.03)}" fill="rgba(255,255,255,0.08)" />
        <circle cx="${coreX}" cy="${coreY}" r="${Math.max(34, Math.round(Math.min(width, height) * 0.09))}" fill="rgba(255,255,255,0.09)" />
        <circle cx="${Math.round(width * 0.65)}" cy="${Math.round(height * 0.3)}" r="${Math.max(20, Math.round(Math.min(width, height) * 0.05))}" fill="rgba(255,255,255,0.11)" />
        <path d="M ${Math.round(width * 0.14)} ${Math.round(height * 0.18)} L ${Math.round(width * 0.86)} ${Math.round(height * 0.84)}" stroke="rgba(255,255,255,0.09)" stroke-width="1.2" />
        <path d="M ${Math.round(width * 0.16)} ${Math.round(height * 0.82)} L ${Math.round(width * 0.82)} ${Math.round(height * 0.2)}" stroke="rgba(255,255,255,0.08)" stroke-width="1.2" />
      </g>

      <g opacity="0.55">
        <rect x="${Math.round(width * (0.1 + insets))}" y="${Math.round(height * 0.08)}" width="${Math.round(width * 0.02)}" height="${Math.round(height * 0.78)}" fill="rgba(255,255,255,0.08)" />
        <rect x="${Math.round(width * 0.82)}" y="${Math.round(height * 0.11)}" width="${Math.round(width * 0.018)}" height="${Math.round(height * 0.68)}" fill="rgba(255,255,255,0.08)" />
      </g>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export const site = {
  name: "A. BERGER",
  displayName: "Angel Berger",
  tagline: "Image-led portfolio/archive with physical work, screen work, notes, and direct inquiry.",
  description:
    "A creative portfolio/archive for physical work, digital work, journal notes, and direct inquiry.",
  email: "angelberger09@gmaill.com",
  emailLabel: "Send email",
  status: "Open to inquiries",
  responseNote: "Replies when the work needs it.",
};

export const navItems = [
  { key: "home", label: "Home", href: "./" },
  { key: "physical", label: "Physical", href: "./physical/" },
  { key: "digital", label: "Digital", href: "./digital/" },
  { key: "journal", label: "Journal", href: "./journal/" },
  { key: "contact", label: "Contact", href: "./contact/" },
];

export const socialLinks = [
  { key: "instagram", label: "Instagram", href: "#" },
  { key: "pinterest", label: "Pinterest", href: "#" },
  { key: "tiktok", label: "TikTok", href: "#" },
  { key: "youtube", label: "YouTube", href: "#" },
  { key: "email", label: "Email", href: "mailto:angelberger09@gmaill.com" },
];

export const bannerImages = {
  home: sceneImage({
    mode: "banner",
    bgA: "#120e0b",
    bgB: "#201612",
    glowA: "#f1b45f",
    glowB: "#739d83",
    glowC: "#b86f3f",
  }),
  physical: sceneImage({
    mode: "banner",
    bgA: "#0e0b09",
    bgB: "#1b1410",
    glowA: "#c98b52",
    glowB: "#7a9e72",
    glowC: "#f1b45f",
  }),
  digital: sceneImage({
    mode: "banner",
    bgA: "#091015",
    bgB: "#13202a",
    glowA: "#5cb0da",
    glowB: "#f1b45f",
    glowC: "#8de0d0",
  }),
  journal: sceneImage({
    mode: "banner",
    bgA: "#100d10",
    bgB: "#21161b",
    glowA: "#cf8ea0",
    glowB: "#8e7bb4",
    glowC: "#f1b45f",
  }),
  contact: sceneImage({
    mode: "banner",
    bgA: "#0f0b09",
    bgB: "#1b1711",
    glowA: "#d58b5d",
    glowB: "#829f72",
    glowC: "#f1b45f",
  }),
};

const imageSources = {
  physicalPreview: sceneImage({
    mode: "square",
    bgA: "#10100d",
    bgB: "#26221c",
    glowA: "#c98b52",
    glowB: "#739d83",
    glowC: "#f1b45f",
  }),
  digitalPreview: sceneImage({
    mode: "square",
    bgA: "#091018",
    bgB: "#112633",
    glowA: "#5fb7e1",
    glowB: "#f1b45f",
    glowC: "#87d7ce",
  }),
  journalPreview: sceneImage({
    mode: "square",
    bgA: "#100f11",
    bgB: "#20191e",
    glowA: "#c78998",
    glowB: "#9682bd",
    glowC: "#f1b45f",
  }),
  paperFold: sceneImage({
    mode: "portrait",
    bgA: "#0d0b09",
    bgB: "#1f1813",
    glowA: "#c98b52",
    glowB: "#e8c98a",
    glowC: "#7a9e72",
  }),
  clayStudy: sceneImage({
    mode: "portrait",
    bgA: "#120c0b",
    bgB: "#221815",
    glowA: "#b86f3f",
    glowB: "#f1b45f",
    glowC: "#739d83",
  }),
  glowLamp: sceneImage({
    mode: "portrait",
    bgA: "#0d0b09",
    bgB: "#1b1612",
    glowA: "#f1b45f",
    glowB: "#739d83",
    glowC: "#d58b5d",
  }),
  clothEdge: sceneImage({
    mode: "portrait",
    bgA: "#100c0d",
    bgB: "#26171a",
    glowA: "#c78998",
    glowB: "#d7b9a4",
    glowC: "#f1b45f",
  }),
  pulsePack: sceneImage({
    mode: "portrait",
    bgA: "#091018",
    bgB: "#16202a",
    glowA: "#5cb0da",
    glowB: "#f1b45f",
    glowC: "#8de0d0",
  }),
  softGrid: sceneImage({
    mode: "portrait",
    bgA: "#09141a",
    bgB: "#123047",
    glowA: "#7ec2e8",
    glowB: "#f2d57d",
    glowC: "#8de0d0",
  }),
  indexRoom: sceneImage({
    mode: "portrait",
    bgA: "#0f100e",
    bgB: "#1c1812",
    glowA: "#d8ba7d",
    glowB: "#7a9e72",
    glowC: "#f1b45f",
  }),
  frameNotes: sceneImage({
    mode: "portrait",
    bgA: "#120d11",
    bgB: "#24141d",
    glowA: "#d88cc3",
    glowB: "#f1b45f",
    glowC: "#7f8fd6",
  }),
  journalVisual1: sceneImage({
    mode: "portrait",
    bgA: "#0f0b09",
    bgB: "#211912",
    glowA: "#e2c298",
    glowB: "#c98b52",
    glowC: "#739d83",
  }),
  journalVisual2: sceneImage({
    mode: "portrait",
    bgA: "#100e10",
    bgB: "#1f161a",
    glowA: "#c78998",
    glowB: "#8e7bb4",
    glowC: "#f1b45f",
  }),
  journalVisual3: sceneImage({
    mode: "portrait",
    bgA: "#091018",
    bgB: "#13202a",
    glowA: "#5cb0da",
    glowB: "#f1b45f",
    glowC: "#8de0d0",
  }),
};

export const homePreviews = [
  {
    key: "physical",
    eyebrow: "Physical preview",
    title: "Physical work",
    summary: "Objects, prints, textile edges, and quiet material pieces.",
    meta: "Go to Physical",
    href: "./physical/",
    image: imageSources.physicalPreview,
  },
  {
    key: "digital",
    eyebrow: "Digital preview",
    title: "Digital work",
    summary: "Motion loops, identity systems, and screen pieces.",
    meta: "Go to Digital",
    href: "./digital/",
    image: imageSources.digitalPreview,
  },
  {
    key: "journal",
    eyebrow: "Journal preview",
    title: "Journal / notes",
    summary: "Loose notes, materials, and process fragments.",
    meta: "Go to Journal",
    href: "./journal/",
    image: imageSources.journalPreview,
  },
];

export const physicalItems = [
  {
    title: "Paper Fold",
    type: "Framed print",
    status: "Edition 12",
    price: "$180",
    summary: "A framed print with a folded edge and a warm matte tone.",
    detail: "Feels like a note you keep.",
    note: "Soft surface",
    image: imageSources.paperFold,
  },
  {
    title: "Clay Study",
    type: "Object",
    status: "One-off",
    price: "$240",
    summary: "A small vessel with an uneven lip and a hand-finished glaze.",
    detail: "Quiet, tactile, honest.",
    note: "Hand made",
    image: imageSources.clayStudy,
  },
  {
    title: "Glow Lamp",
    type: "Light piece",
    status: "Studio build",
    price: "$320",
    summary: "A small pool of light for corners that need a soft cast.",
    detail: "Warm cast, low glare.",
    note: "Warm cast",
    image: imageSources.glowLamp,
  },
  {
    title: "Cloth Edge",
    type: "Textile",
    status: "Small batch",
    price: "$140",
    summary: "A stitched sample with a faded palette and a little movement in the hem.",
    detail: "Easy care.",
    note: "Easy care",
    image: imageSources.clothEdge,
  },
];

export const digitalItems = [
  {
    title: "Pulse Pack",
    type: "Motion loop",
    status: "Six clips",
    price: "$120",
    summary: "Short motion pieces for banners, openers, and screens that need to breathe.",
    detail: "Loop ready.",
    note: "Loop ready",
    image: imageSources.pulsePack,
  },
  {
    title: "Soft Grid",
    type: "Identity system",
    status: "Mini system",
    price: "$260",
    summary: "Loose rules for type, spacing, color, and a few decisions that stay kind.",
    detail: "Readable first.",
    note: "Readable first",
    image: imageSources.softGrid,
  },
  {
    title: "Index Room",
    type: "Archive room",
    status: "Browseable",
    price: "$90",
    summary: "A centered layout with light motion and clear entry points.",
    detail: "Low friction.",
    note: "Low friction",
    image: imageSources.indexRoom,
  },
  {
    title: "Frame Notes",
    type: "Screen panels",
    status: "Panel set",
    price: "$210",
    summary: "Small panels with bright hover and easy exits.",
    detail: "No trap.",
    note: "No trap",
    image: imageSources.frameNotes,
  },
];

export const journalNotes = [
  {
    title: "Why this split works",
    type: "Studio note",
    status: "Working note",
    summary: "Physical things. Digital things. Soft edges, clear exits.",
    detail: "The split keeps the site easy to read and easy to revisit.",
  },
  {
    title: "Craft journal",
    type: "Process note",
    status: "Loose note",
    summary: "Loose notes, not a report.",
    detail: "Keep the language close to how the studio actually talks.",
  },
  {
    title: "Frame notes",
    type: "Readability note",
    status: "Working note",
    summary: "Hover brighten belongs on reading surfaces, not every tile.",
    detail: "Brighten text-heavy blocks; keep utility controls calm.",
  },
  {
    title: "Favorite materials",
    type: "Material note",
    status: "Open note",
    summary: "Paper, clay, cloth, light.",
    detail: "Use ordinary material words instead of formal discipline labels.",
  },
];

export const journalVisuals = [
  {
    title: "Studio note",
    image: imageSources.journalVisual1,
    caption: "Loose notes and material samples.",
  },
  {
    title: "Favorite materials",
    image: imageSources.journalVisual2,
    caption: "Paper, cloth, light.",
  },
  {
    title: "Process fragments",
    image: imageSources.journalVisual3,
    caption: "Short notes kept open.",
  },
];

export const contact = {
  heading: "Leave a note",
  intro:
    "Send a direct inquiry if you want to discuss physical work, digital work, or a future collaboration.",
  primaryLabel: "angelberger09@gmaill.com",
  primaryHref: "mailto:angelberger09@gmaill.com",
  options: [
    "Physical work",
    "Digital work",
    "Journal notes",
    "General inquiry",
  ],
  availability: "Open to inquiries",
  statusNote: "Replies when the work needs it.",
};
