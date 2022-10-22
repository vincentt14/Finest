const hamburgerButton = document.getElementById("hamburger");
const drawerElement = document.getElementById("drawer");
const mainElement = document.querySelector("main");
const back = document.getElementById("back");

hamburgerButton.addEventListener("click", (event) => {
  drawerElement.classList.toggle("open");
  event.stopPropagation();
});

mainElement.addEventListener("click", (event) => {
  drawerElement.classList.remove("open");
  event.stopPropagation();
});

back.addEventListener("click", (event) => {
  drawerElement.classList.remove("open");
  event.stopPropagation();
});
