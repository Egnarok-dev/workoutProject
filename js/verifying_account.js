const refs = {
    openModalBtn: document.querySelector('[data-action="open-verifying-account-modal"]')   ,
    closeModalBtn: document.querySelector('[data-action="close-verifying_account-modal"]'),
    backdrop: document.querySelector(".verifying_account_backdrop_modal"),
};

refs.openModalBtn.addEventListener("click", onOpenModalClick);
refs.closeModalBtn.addEventListener("click", onCloseModalClick);
refs.backdrop.addEventListener("click", onBackdropClick);

function onOpenModalClick(event) {
    window.addEventListener("keydown", onEscapeKeypress)
    document.body.classList.add("show-verifying-account-modal");
    document.body.classList.remove("show-recover-password-modal")
    console.log(`чи є подія?`);
}

function onCloseModalClick (event) {
    window.removeEventListener("keydown", onEscapeKeypress);
    document.body.classList.remove("show-verifying-account-modal")
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