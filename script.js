// Code that controls the toggle navigation button on small screens

function showParentNavigationMenu() {
    const navMenu = document.querySelector("nav ul.parent-navigation-list");
    navMenu.classList.toggle("active");
}

const navToggleButton = document.querySelector(".nav-toggle-button");
navToggleButton.addEventListener("click", showParentNavigationMenu);


// Code that controls the subnavigation toggles

const parentNavItems = document.querySelectorAll(".contains-child-navigation-list");

for (const item of parentNavItems) {
    const button = item.querySelector("button");
    button.addEventListener("click", (e) => {
        e.preventDefault();
        item.classList.toggle("active");
    }
    )
};