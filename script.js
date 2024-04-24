const hamMenuButton = document.querySelector(".ham-menu");
const hamMenuPopout = document.querySelector(".ham-menu-popout");
const mblOverlay = document.querySelector(".mbl-overlay");

hamMenuButton.addEventListener("click", () => {
  hamMenuPopout.classList.toggle("show-menu");
  mblOverlay.classList.toggle("show-overlay");
});
