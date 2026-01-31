function showNavigationMenu() {
    const navMenu = document.querySelector("nav ul");
    navMenu.classList.toggle("active");
}

const navToggleButton = document.querySelector(".nav-toggle-button");
navToggleButton.addEventListener("click", showNavigationMenu);