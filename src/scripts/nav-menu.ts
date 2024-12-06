

/* Navbar section */

const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
// show menu
if(navToggle){
    navToggle.addEventListener('click', () => {
        // navClose!.style.display = "flex";
        // navToggle!.style.display = "none";
        navMenu!.classList.add("show-menu");
    })
}
// close menu
if(navClose){
    navClose.addEventListener('click', () => {
        // navClose!.style.display = "none";
        // navToggle!.style.display = "flex";
        navMenu!.classList.remove("show-menu");
    })
}
