import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/components.css";
import "./styles/pages.css";

import {
  bannerImages,
  contact,
  digitalList,
  featuredDigital,
  featuredJournal,
  featuredPhysical,
  homePreviews,
  journalList,
  journalVisuals,
  navItems,
  physicalList,
  site,
  socialLinks,
} from "./data/content.js";
import { syncActiveNav } from "./components/nav.js";
import { syncStaticChrome } from "./components/chrome.js";
import { mountEntryList, mountFeaturedEntry } from "./components/entry.js";
import { bindModal } from "./components/modal.js";
import { mountPreview } from "./components/page-preview.js";
import { mountVisualRail } from "./components/visual-rail.js";
import { bindParallax } from "./components/parallax.js";
import { bindPaperMotion } from "./components/paper-motion.js";
import { mountScanScroll } from "./components/scan-scroll.js";
import { cleanPath, escapeHtml } from "./lib/dom.js";

document.addEventListener("DOMContentLoaded", () => {
  syncStaticChrome({ site, navItems, socialLinks });
  syncActiveNav();

  const page = document.body.dataset.page;
  const bannerImage = document.querySelector(".page-banner__image");
  if (bannerImage && page && bannerImages[page]) {
    bannerImage.src = bannerImages[page];
  }

  const modal = document.querySelector("[data-modal]");
  bindModal(modal);
  const pageSelector = document.querySelector("[data-page-selector]");
  const menuOpen = document.querySelector("[data-menu-open]");
  const menuClose = document.querySelector("[data-menu-close]");

  function openSelector() {
    if (!pageSelector || !menuOpen) return;
    pageSelector.hidden = false;
    document.body.classList.add("selector-open");
    menuOpen.setAttribute("aria-expanded", "true");
  }

  function closeSelector() {
    if (!pageSelector || !menuOpen) return;
    pageSelector.hidden = true;
    document.body.classList.remove("selector-open");
    menuOpen.setAttribute("aria-expanded", "false");
    menuOpen.focus();
  }

  if (menuOpen && pageSelector) {
    menuOpen.addEventListener("click", openSelector);
    menuClose?.addEventListener("click", closeSelector);
    pageSelector.addEventListener("click", (event) => {
      if (event.target === pageSelector) closeSelector();
    });
    window.addEventListener("keydown", (event) => {
      if (!pageSelector.hidden && event.key === "Escape") closeSelector();
    });
    pageSelector.querySelectorAll("[data-nav-link]").forEach((link) => {
      if (cleanPath(new URL(link.href, window.location.href).pathname) === document.body.dataset.page) {
        link.setAttribute("aria-current", "page");
      }
    });
  }

  if (page === "home") {
    mountPreview(document.querySelector("[data-preview-slot='physical']"), homePreviews[0]);
    mountPreview(document.querySelector("[data-preview-slot='digital']"), homePreviews[1]);
    mountPreview(document.querySelector("[data-preview-slot='journal']"), homePreviews[2]);
  }

  if (page === "physical") {
    mountFeaturedEntry(document.querySelector("[data-render='physical-featured']"), featuredPhysical, {
      eager: true,
      theme: "light",
      titleId: "featured-object-entry-title",
    });
    mountEntryList(document.querySelector("[data-render='physical-items']"), physicalList);
  }

  if (page === "digital") {
    mountFeaturedEntry(document.querySelector("[data-render='digital-featured']"), featuredDigital, {
      eager: true,
      titleId: "featured-digital-entry-title",
    });
    mountEntryList(document.querySelector("[data-render='digital-items']"), digitalList);
  }

  if (page === "journal") {
    mountFeaturedEntry(document.querySelector("[data-render='journal-featured']"), featuredJournal, {
      theme: "light",
      titleId: "journal-featured-entry-title",
    });
    mountEntryList(document.querySelector("[data-render='journal-notes']"), journalList);
    mountVisualRail(document.querySelector("[data-render='journal-visuals']"), journalVisuals);
  }

  if (page === "contact") {
    const options = document.querySelector("[data-render='contact-options']");
    if (options) {
      options.innerHTML = contact.options
        .map((item) => `<li>${escapeHtml(item)}</li>`)
        .join("");
    }
  }

  bindParallax();
  bindPaperMotion();
  mountScanScroll();
});
