// Link hub starter: replace example profile URLs in index.html with your real links.
// This lightweight click tracker counts clicks only in the current browser session.
// It does NOT collect visitor-wide analytics or send data to a server.
document.addEventListener("DOMContentLoaded", () => {
  const links = [...document.querySelectorAll("[data-link]")];
  const toast = document.getElementById("toast");
  links.forEach(link => {
    link.addEventListener("click", () => {
      const key = `ig-link-click-${link.dataset.link}`;
      const count = Number(sessionStorage.getItem(key) || "0") + 1;
      sessionStorage.setItem(key, String(count));
    });
  });

  // Tiny hover/press response on interactive portal cards.
  document.querySelectorAll(".portal-card, .clip-card, .featured-link").forEach(card => {
    card.addEventListener("pointerdown", () => card.classList.add("pressed"));
    card.addEventListener("pointerup", () => card.classList.remove("pressed"));
    card.addEventListener("pointerleave", () => card.classList.remove("pressed"));
  });

  // Optional helper: append ?preview=1 to the URL to preview a toast message.
  if (new URLSearchParams(location.search).get("preview") === "1" && toast) {
    toast.textContent = "Welcome to the ItsyaboiiGaetan preview!";
    toast.classList.add("show");
    window.setTimeout(() => toast.classList.remove("show"), 2600);
  }
});
