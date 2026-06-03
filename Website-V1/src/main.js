import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/components.css";
import "./styles/pages.css";

import {
  bannerImages,
  contact,
  digitalItems,
  homePreviews,
  journalNotes,
  journalVisuals,
  physicalItems,
} from "./data/content.js";
import { syncActiveNav } from "./components/nav.js";
import { mountEntryList } from "./components/entry.js";
import { bindModal } from "./components/modal.js";
import { mountPreview } from "./components/page-preview.js";
import { mountVisualRail } from "./components/visual-rail.js";
import { bindParallax } from "./components/parallax.js";
import { cleanPath, escapeHtml } from "./lib/dom.js";

document.addEventListener("DOMContentLoaded", () => {
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
    mountEntryList(document.querySelector("[data-render='physical-items']"), physicalItems.slice(1));
  }

  if (page === "digital") {
    mountEntryList(document.querySelector("[data-render='digital-items']"), digitalItems.slice(1));
  }

  if (page === "journal") {
    mountEntryList(document.querySelector("[data-render='journal-notes']"), journalNotes);
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
});
