const fullNav = document.getElementById("full-menu");
const openNav = document.getElementById("hamburger");
const closeNav = document.getElementById("closeMenu");

openNav.addEventListener("click", () => {
  fullNav.style.left = "0";
});
closeNav.addEventListener("click", () => {
  fullNav.style.left = "-110%";
});
