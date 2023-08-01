const modalBox = document.querySelector('.pop_up_modal')
const closeBtnModal = document.querySelector('.close_btn_pop_up')

closeBtnModal.addEventListener('click', onCloseModal)

const MAX_PROMPT = 2;
let promptCounter = 0;
let hasSubscript = false;

showModal()

function showModal () {
    setTimeout(() => {
        console.log("Відкриваємо нагадування");
        modalBox.classList.add('is-visible')
        promptCounter += 1
    }, 1000)   
}

function onCloseModal (event) {
    modalBox.classList.remove('is-visible')
    if (promptCounter === MAX_PROMPT || hasSubscript) {
        console.log("Макисмальна кількість нагадувань або підписався");
        return;
    } 
    setTimeout(() => {
        console.log("Відкриваємо нагадування");
        modalBox.classList.add('is-visible')
        promptCounter += 1
        console.log(promptCounter);
    }, 1000)
}