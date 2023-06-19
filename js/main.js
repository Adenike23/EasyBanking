AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
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