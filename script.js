const searchInput = document.querySelector("#search-input");
const cards = [...document.querySelectorAll(".media-card")];
const emptyState = document.querySelector("#empty-state");
const toast = document.querySelector("#toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function filterCards() {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCards = 0;

  cards.forEach((card) => {
    const matches = card.dataset.title.toLowerCase().includes(query);
    card.hidden = !matches;
    if (matches) visibleCards += 1;
  });

  emptyState.hidden = visibleCards > 0;
}

searchInput.addEventListener("input", filterCards);

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement !== searchInput) {
    event.preventDefault();
    searchInput.focus();
  }
});

document.querySelectorAll(".card-play").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".media-card");
    const title = card.dataset.title;
    const isPlaying = button.dataset.playing === "true";

    document.querySelectorAll(".card-play").forEach((otherButton) => {
      otherButton.dataset.playing = "false";
      otherButton.textContent = "▶";
    });

    if (!isPlaying) {
      button.dataset.playing = "true";
      button.textContent = "Ⅱ";
      showToast(`Playing “${title}”`);
    }
  });
});

document.querySelectorAll(".save-button").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".media-card");
    const title = card.dataset.title;
    const saved = button.classList.toggle("saved");
    button.textContent = saved ? "×" : "+";
    button.setAttribute("aria-label", `${saved ? "Remove" : "Save"} ${title}`);
    showToast(saved ? `${title} saved` : `${title} removed`);
  });
});

document.querySelectorAll(".view-button").forEach((button, index) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".view-button").forEach((viewButton) => viewButton.classList.remove("selected"));
    button.classList.add("selected");
    document.querySelector(".media-grid").classList.toggle("list-view", index === 1);
  });
});
