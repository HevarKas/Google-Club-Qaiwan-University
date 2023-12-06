const menu = document.getElementById("menu");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");

function openMenuHandler() {
  menu.classList.remove("hidden");
}

function closeMenuHandler() {
  menu.classList.add("hidden");
}

openMenu.addEventListener("click", openMenuHandler);
closeMenu.addEventListener("click", closeMenuHandler);
