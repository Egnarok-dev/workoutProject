const refs = {
    openModalBtn: document.querySelector('[data-action="open-create-new-pasword-modal"]')   ,
    closeModalBtn: document.querySelector('[data-action="close-new-password-modal"]'),
    backdrop: document.querySelector(".new_password_backdrop_modal"),
};

refs.openModalBtn.addEventListener("click", onOpenModalClick);
refs.closeModalBtn.addEventListener("click", onCloseModalClick);
refs.backdrop.addEventListener("click", onBackdropClick);

function onOpenModalClick(event) {
    window.addEventListener("keydown", onEscapeKeypress)
    document.body.classList.add("show-new-pasword-modal");
    document.body.classList.remove("show-verifying-account-modal")
    console.log(`чи є подія?`);
}

function onCloseModalClick (event) {
    window.removeEventListener("keydown", onEscapeKeypress);
    document.body.classList.remove("show-new-pasword-modal")
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