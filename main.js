const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
const img = document.querySelector(".img");

const imageMap = {
  history: "./image/cloud.jpg",
  vision: "./image/mountain.jpg",
  goals: "./image/ocean.jpg",
};
about.addEventListener("click", (e) => {
  const id = e.target.dataset.id;

  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });

    e.target.classList.add("active");

    articles.forEach((article) => {
      article.classList.remove("active");
    });

    const element = document.getElementById(id);

    element.classList.add("active");
  }

  if (imageMap[id]) {
    img.src = imageMap[id];
  }
});
