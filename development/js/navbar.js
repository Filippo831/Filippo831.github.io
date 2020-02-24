//  INPUT

let navbarMenu = document.querySelector(".navbarMenuSocial").style;
let navbarLinks = document.querySelectorAll(".navbarLinks li");
let burger = document.querySelector(".burger");
let timingAnimation;
let lenghtWindow = window.innerWidth;
let navbarWhiteBgLinks = document.querySelector(".navbarMenuSocial");
let navbarWhiteBgLogo = document.querySelector(".underNav");

//  on click set state grid
burger.addEventListener("click", () => {
    gsap.to(".navbarMenuSocial", {
        duration: 0.3,
        display: navbarMenu.display == "grid" ? "none" : "grid",
        x: navbarMenu.display == "grid" ? lenghtWindow : 0,
        opacity: navbarMenu.display == "grid" ? 1 : 0.8
    });
    burgerToggle();
});

function burgerToggle() {
    if (navbarMenu.display != "grid") {
        gsap.to(".line1", {
            rotate: 45,
            y: 7
        });
        gsap.to(".line3", {
            rotate: -45,
            y: -7
        });
        gsap.to(".line2", {
            duration: 0,
            opacity: 0
        });
        gsap.to(".navbarMenuSocial", {
            opacity: 1
        });
    } else {
        gsap.to(".line1", {
            rotate: 0,
            y: 0
        });
        gsap.to(".line3", {
            rotate: 0,
            y: 0
        });
        gsap.to(".line2", {
            duration: 0.3,
            opacity: 1
        });
        gsap.to(".navbarMenuSocial", {
            opacity: 1
        });
    }
}
