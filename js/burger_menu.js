const burger_menu = document.querySelector('.burger_menu')
const header_menu = document.querySelector('.header_menu')

burger_menu.addEventListener('click', onOpenBurgerMenuClick)

function onOpenBurgerMenuClick (event) {
    burger_menu.classList.toggle('active')
    header_menu.classList.toggle('active')
}