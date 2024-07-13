const hamMenuButton = document.querySelector(".ham-menu");
const hamMenu = document.querySelector(".ham-menu");
const hamMenuPopout = document.querySelector(".ham-menu-popout");

hamMenuButton.addEventListener("click", () => {
  toggleMenu();
  animateMenuIcon();
});

const cells = document.querySelectorAll("[data-cell]");

cells.forEach((cell) => {
  const cellImg = cell.querySelector("img");
  const openButton = cell.querySelector("button");
  const dialog = cell.querySelector("dialog");
  const closeButton = dialog.querySelector("button");

  // cell.addEventListener("mouseover", addImgFX);
  // cell.addEventListener("mouseout", removeImgFX);
  openButton.addEventListener("click", show);
  closeButton.addEventListener("click", hide);
  dialog.addEventListener("click", clickHide);

  function addImgFX() {
    cellImg.classList.add("img-efx");
    console.log("ON");
  }

  function removeImgFX() {
    cellImg.classList.remove("img-efx");
    console.log("OFF");
  }

  function show() {
    dialog.showModal();
    dialog.classList.add("show");
  }

  function hide() {
    dialog.classList.remove("show");
    setTimeout(() => {
      dialog.close();
    }, 300);
  }

  function clickHide(e) {
    const dialogDimensions = dialog.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      dialog.classList.remove("show");
      setTimeout(() => {
        dialog.close();
      }, 300);
    }
  }
});

function toggleMenu() {
  hamMenuPopout.classList.toggle("show-menu");
}

function animateMenuIcon() {
  hamMenu.classList.toggle("move-lines");
}
