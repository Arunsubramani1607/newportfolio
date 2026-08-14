const gate = document.querySelector("#gate");
const enterButton = document.querySelector("#enter-site");
const themeAudio = document.querySelector("#theme-audio");
const scrollCue = document.querySelector(".scroll-cue");

const openGate = async () => {
  document.body.classList.add("gate-open");
  gate?.classList.add("hidden");

  try {
    await themeAudio?.play();
  } catch {
    themeAudio?.setAttribute("data-autoplay-blocked", "true");
  }

  document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" });
};

enterButton?.addEventListener("click", openGate);

scrollCue?.addEventListener("click", () => {
  document.querySelector(".kingdom")?.scrollIntoView({ behavior: "smooth" });
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !gate?.classList.contains("hidden")) {
    openGate();
  }
});
