const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

let desktopMenuTimer = null;

menuEmail.addEventListener("mouseenter", toggleDesktopMenu);
menuEmail.addEventListener("mouseleave", hideDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

desktopMenu.addEventListener("mouseenter", stopHideDesktopMenu);
desktopMenu.addEventListener("mouseleave", hideDesktopMenu);


function toggleDesktopMenu() {
    clearTimeout(desktopMenuTimer);
    desktopMenu.classList.remove("inactive");
}

function hideDesktopMenu() {
    desktopMenuTimer = setTimeout(() => {
        desktopMenu.classList.add("inactive");
    }, 500);
}

function stopHideDesktopMenu(event) {
    event.stopPropagation();
    clearTimeout(desktopMenuTimer);
}

function toggleMobileMenu() {

    const isAsideClosed = aside.classList.contains("inactive")

    if (!isAsideClosed) {
        aside.classList.add("inactive")
    }

    mobileMenu.classList.toggle("inactive")
}

function toggleCarritoAside() {

    const isMobileMenuClosed = mobileMenu.classList.contains("inactive")

        if (!isMobileMenuClosed) {
            mobileMenu.classList.add("inactive")
        }
         
        aside.classList.toggle("inactive");
    

    
}