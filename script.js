const hamMenuButton = document.querySelector(".ham-menu");
const hamMenu = document.querySelector(".ham-menu");
const hamMenuPopout = document.querySelector(".ham-menu-popout");
const mblOverlay = document.querySelector(".mbl-overlay");

hamMenuButton.addEventListener("click", () => {
  hamMenuPopout.classList.toggle("show-menu");
  hamMenu.classList.toggle("move-lines");
  mblOverlay.classList.toggle("show-overlay");
});
