const slideBtnEl = document.querySelector(".switch-btn");
const videoEl = document.querySelector(".video-container");

window.addEventListener("load", () => {
  document.querySelector(".preloader").classList.add("hide-preloader");
});

slideBtnEl.addEventListener("click", () => {
  if (!slideBtnEl.classList.contains("slide")) {
    slideBtnEl.classList.add("slide");
    videoEl.pause();
  } else {
    slideBtnEl.classList.remove("slide");
    videoEl.play();
  }
});
