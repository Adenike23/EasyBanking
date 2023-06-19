AOS.init();

const openNav = document.querySelector(".ri-menu-fill");
const closeNav = document.querySelector(".ri-close-fill");
const navList = document.querySelector("nav ul");
openNav.addEventListener("click", function() {
    navList.style.top = "40%"
    openNav.style.display = "none"
    closeNav.style.display = "block"
})
closeNav.addEventListener("click", function() {
    navList.style.top = "-40%"
    openNav.style.display = "block"
    closeNav.style.display = "none"
})
document.querySelectorAll("nav ul a").forEach(navLink => {
    navLink.addEventListener("click", function() {
        navList.style.top = "-40%"
        openNav.style.display = "block"
        closeNav.style.display = "none"
    })
})
const arrowUp = document.querySelector(".ri-arrow-up-s-line"); // to invoke or call the 'back-to-top' button
// code to make the 'back-to-top' button functional(once it is clicked, it moves to the top of the webpage)
arrowUp.addEventListener("click", function() {
    document.body.scrollTop = 0; // for safari browsers
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})
window.addEventListener("scroll", function() {
    //when the user scrolls 30px from the top, show the 'back-to-top' button(first for crome, second for Safari)
    if(document.documentElement.scrollTop >= 30 || document.body.scrollTop >= 30) {
        arrowUp.style.display = "block"
    } else{
        arrowUp.style.display = "none"
    }
})