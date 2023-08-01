const openModalBtn = document.querySelector('[data-action="open_cart_modal"]')
const closeModalBtn = document.querySelector('[data-action="close_cart_modal"]')
const makeOrderBtn = document.querySelector('[data-action="send-sign-in-modal"]')
const backdrop = document.querySelector('.js_cart_backdrop')

openModalBtn.addEventListener('click', onOpenModalClick)
closeModalBtn.addEventListener('click', onCloseModalClick)
backdrop.addEventListener('click', onBackdropClick)

function onOpenModalClick(event) {
    window.addEventListener("keydown", onEscapeKeypress);
    document.body.classList.add('show-cart-modal')
}

function onCloseModalClick(event) { 
    window.removeEventListener("keydown", onEscapeKeypress);
    document.body.classList.remove('show-cart-modal')
}

function onBackdropClick (event) {
    if (event.currentTarget === event.target) {
        onCloseModalClick();
      }
}

function onEscapeKeypress(event) {
    const ESC_KEY_CODE = "Escape";
    const isEscKey = event.code === ESC_KEY_CODE;
    if (isEscKey) {
      onCloseModalClick();
    }
}