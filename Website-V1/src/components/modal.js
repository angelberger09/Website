let activeTrigger = null;

function getParts(modal) {
  return {
    title: modal.querySelector("[data-modal-title]"),
    type: modal.querySelector("[data-modal-type]"),
    status: modal.querySelector("[data-modal-status]"),
    body: modal.querySelector("[data-modal-body]"),
  };
}

export function bindModal(modal) {
  if (!modal) return;

  const closeButton = modal.querySelector("[data-modal-close]");
  const panel = modal.querySelector("[data-modal-panel]");
  const parts = getParts(modal);

  if (!closeButton || !panel || !parts.title || !parts.type || !parts.status || !parts.body) {
    return;
  }

  function openFromTrigger(trigger) {
    activeTrigger = trigger;
    parts.title.textContent = trigger.dataset.entryTitle || "Details pending";
    parts.type.textContent = trigger.dataset.entryType || "";
    parts.status.textContent = trigger.dataset.entryStatus || "";
    parts.body.textContent = trigger.dataset.entryDetail || trigger.dataset.entrySummary || "Details pending";
    modal.hidden = false;
    document.body.classList.add("modal-open");
    closeButton?.focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    if (activeTrigger) {
      activeTrigger.focus();
    }
    activeTrigger = null;
  }

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-entry-expand]");
    if (!trigger) return;
    event.preventDefault();
    openFromTrigger(trigger);
  });

  closeButton?.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  panel?.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  window.addEventListener("keydown", (event) => {
    if (!modal.hidden && event.key === "Escape") {
      closeModal();
    }
  });
}
