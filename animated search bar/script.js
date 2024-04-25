const searchBarContainerEL = document.querySelector(".search-bar-container");
const inputEl = document.querySelector(".input");
const magnifierEl = document.querySelector(".magnifier");
const micIconEl = document.querySelector(".mic-icon");

magnifierEl.addEventListener("click", () => {
  searchBarContainerEL.classList.toggle("active");
  inputEl.classList.toggle("active");
  micIconEl.classList.toggle("active");
});
