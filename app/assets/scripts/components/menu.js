const menuIcon = document.querySelector(".menu__icon");
const menu = document.querySelector(".menu");
const menuItem = document.querySelectorAll(".menu__items--item");
menuIcon.addEventListener("click", () => {
  toggleMenu();
});
menuItem.forEach(el => {
  el.addEventListener("click", () => {
    toggleMenu();
  });
});
const toggleMenu = () => {
  menuIcon.classList.toggle("menu__icon--effects");
  menu.classList.toggle("u-hide");
};
