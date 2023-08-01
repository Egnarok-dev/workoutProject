const refs = {
    openModalBtn: document.querySelector('[data-action="open-recover-password-modal"]')   ,
    closeModalBtn: document.querySelector('[data-action="close-recover_password-modal"]'),
    backdrop: document.querySelector(".password_backdrop_modal"),
    mail: document.querySelector('[type="email"]'),
};

refs.openModalBtn.addEventListener("click", onOpenModalClick);
refs.closeModalBtn.addEventListener("click", onCloseModalClick);
refs.backdrop.addEventListener("click", onBackdropClick);

function onOpenModalClick(event) {
    window.addEventListener("keydown", onEscapeKeypress)
    document.body.classList.add("show-recover-password-modal");
    document.body.classList.remove("show-sign-in-modal")
    console.log(`чи є подія?`);
}

function onCloseModalClick (event) {
    window.removeEventListener("keydown", onEscapeKeypress);
    document.body.classList.remove("show-recover-password-modal")
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