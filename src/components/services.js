const cards = document.querySelector(".cards");
cards?.addEventListener("mousemove", (e) => {
	cards.style.setProperty("--x", e.x + "px");
	cards.style.setProperty("--y", e.y + "px");
});
