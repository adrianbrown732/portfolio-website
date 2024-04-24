const hamMenuButton = document.querySelector(".ham-menu");
const hamMenuPopout = document.querySelector(".ham-menu-popout");
const bgOverlay = document.querySelector(".bg-overlay");

hamMenuButton.addEventListener("click", () => {
  hamMenuPopout.classList.toggle("hide");
  bgOverlay.classList.toggle("mbl-overlay");
});
