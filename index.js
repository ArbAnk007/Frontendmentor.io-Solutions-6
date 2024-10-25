const expandMenuBtn = document.querySelector("#expand-menu");
const collapseMenuBtn = document.querySelector("#collapse-menu");
const sideNav = document.querySelector("#side-nav");
const backgroundShadow = document.querySelector("#bg-shadow");

collapseMenuBtn.addEventListener("click", () => {
  sideNav.classList.add("hidden");
  backgroundShadow.classList.add("hidden");
});

expandMenuBtn.addEventListener("click", () => {
  sideNav.classList.remove("hidden");
  backgroundShadow.classList.remove("hidden");
});

backgroundShadow.addEventListener("click", () => {
  sideNav.classList.add("hidden");
  backgroundShadow.classList.add("hidden");
});
