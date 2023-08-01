const refs = {
    openModalBtn: document.querySelector('[data-action="open-security-code-modal"]')   ,
    closeModalBtn: document.querySelector('[data-action="close-security-code-modal"]'),
    backdrop: document.querySelector(".security_code_backdrop_modal"),
};

refs.openModalBtn.addEventListener("click", onOpenModalClick);
refs.closeModalBtn.addEventListener("click", onCloseModalClick);
refs.backdrop.addEventListener("click", onBackdropClick);

function onOpenModalClick(event) {
    window.addEventListener("keydown", onEscapeKeypress)
    document.body.classList.add("show-security-code-modal");
    document.body.classList.remove("show-confirm-login-modal")
    console.log(`чи є подія?`);
}

function onCloseModalClick (event) {
    window.removeEventListener("keydown", onEscapeKeypress);
    document.body.classList.remove("show-security-code-modal")
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