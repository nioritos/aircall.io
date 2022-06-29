const mobileNav = document.querySelector(".navigator-mobile");
const menuHamburguer = document.querySelector(".menu-mobile");

menuHamburguer.addEventListener('click', () => {
    
})

const dropperWord = document.querySelectorAll(".dropper");
dropperWord.forEach(element => {
    element.addEventListener('mouseenter', () => {
        const arrowIcon = document.querySelectorAll(".dropper-arrow");
        arrowIcon.forEach(element => {
            element.classList.add("top-top")
        })
    })
});