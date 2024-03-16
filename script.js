// Load necessary index tags -->
const burgerBtn = document.getElementById("burger-btn");
const navigationWrapper = document.querySelector(".nav-wrapper");
const navItems = document.querySelectorAll(".nav__item");

// Menu function toggle -->
const toggle = (nav, burger, classTarget) => {
  nav.classList.toggle(classTarget);
  burger.classList.toggle(classTarget);
};
// Menu function remove -->
const remove = (nav, burger, classTarget) => {
  nav.classList.remove(classTarget);
  burger.classList.remove(classTarget);
};

// Event listeners for menu -->
burgerBtn.addEventListener("click", () =>
  toggle(navigationWrapper, burgerBtn, "active")
);

navItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () =>
    remove(navigationWrapper, burgerBtn, "active")
  );
});

// Event when clicking outside of the nav-wrapper to close it -->
window.addEventListener("click", (e) => {
  if (!navigationWrapper.contains(e.target) && e.target !== burgerBtn) {
    remove(navigationWrapper, burgerBtn, "active");
  }
});
