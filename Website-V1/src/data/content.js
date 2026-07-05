import { bannerImages, imageSources } from "./generated-images.js";

export { bannerImages };

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

export const featuredPhysical = physicalItems[0];
export const physicalList = physicalItems.slice(1);

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

export const featuredDigital = digitalItems[0];
export const digitalList = digitalItems.slice(1);

export const journalNotes = [
  {
    title: "Why this split works",
    type: "Studio note",
    status: "Working note",
    summary: "Physical things. Digital things. Soft edges, clear exits.",
    detail: "The split keeps the site easy to read and easy to revisit.",
    note: "Archive note",
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

export const featuredJournal = journalNotes[0];
export const journalList = journalNotes.slice(1);

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
