const refs = {
  openModalBtn: document.querySelector('[data-action="open-success-modal"]'),
  closeModalBtn: document.querySelector(".continue_btn"),
  backdrop: document.querySelector(".success_backdrop_modal"),
};

refs.openModalBtn.addEventListener("click", onOpenModalClick);
refs.closeModalBtn.addEventListener("click", onCloseModalClick);
refs.backdrop.addEventListener("click", onBackdropClick);

function onOpenModalClick(event) {
  window.addEventListener("keydown", onEscapeKeypress);
  document.body.classList.add("show-success-modal");
  document.body.classList.remove("show-new-pasword-modal");
  console.log(`чи є подія?`);
}

function onCloseModalClick(event) {
  window.removeEventListener("keydown", onEscapeKeypress);
  document.body.classList.remove("show-success-modal");
}

function onBackdropClick(event) {
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
