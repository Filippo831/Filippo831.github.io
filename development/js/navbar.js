//  INPUT

let navbarMenu = document.querySelector(".navbarMenuSocial").style;
let navbarLinks = document.querySelectorAll(".navbarLinks li");
let burger = document.querySelector(".burger");
let timingAnimation;
let lenghtWindow = window.innerWidth;
console.log(lenghtWindow);


//  on click set state grid
burger.addEventListener("click", () => {
    gsap.to(".navbarMenuSocial", {
        duration: .3,
        display : navbarMenu.display == "grid" ? "none" : "grid",
        x: navbarMenu.display == "grid" ? lenghtWindow : 0,
    });

});