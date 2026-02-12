// Code that controls the toggle navigation button on small screens

function showParentNavigationMenu() {
    const navMenu = document.querySelector("nav ul.parent-navigation-list");
    const icon = document.querySelector(".nav-toggle-button span.fa");
    navMenu.classList.toggle("active");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
}

const navToggleButton = document.querySelector(".nav-toggle-button");
navToggleButton.addEventListener("click", showParentNavigationMenu);

document.addEventListener("keydown", (e) => {
    const navMenu = document.querySelector("nav ul.parent-navigation-list");
    if (e.key === "Escape" && navMenu.classList.contains("active")) {
        const icon = document.querySelector(".nav-toggle-button span.fa");
        const navToggleButton = document.querySelector(".nav-toggle-button");
        navMenu.classList.remove("active");
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-times");
        navToggleButton.focus();
    }
})

// Code that controls the subnavigation toggles

const parentNavItems = document.querySelectorAll(".contains-child-navigation-list");

for (const item of parentNavItems) {
    const button = item.querySelector("button");
    const icon = button.querySelector("span.fa")
    button.addEventListener("click", (e) => {
        e.preventDefault();

        const currentlyOpenSection = document.querySelector(".contains-child-navigation-list.active");
        const currentlyOpenSectionIcon = document.querySelector(".contains-child-navigation-list.active button span.fa");
        if (currentlyOpenSection && item !== currentlyOpenSection) {
            currentlyOpenSection.classList.remove("active");
            currentlyOpenSectionIcon.classList.toggle("fa-minus");
            currentlyOpenSectionIcon.classList.toggle("fa-plus");
        }

        item.classList.toggle("active");
        icon.classList.toggle("fa-plus");
        icon.classList.toggle("fa-minus");
    }
    )
};