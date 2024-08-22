// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika desa menu di klik
document.querySelector("#desa").onclick = () => {
  navbarNav.classList.toggle("active");
};

const desa = document.querySelector("#desa");

document.addEventListener("click", function (e) {
  if (!desa.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
