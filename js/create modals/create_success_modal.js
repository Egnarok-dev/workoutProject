
const successModal = document.querySelector('.js_success_modal');
const modal = createneSuccessModal()

successModal.insertAdjacentHTML('beforeend', modal)

function createneSuccessModal () {
    return `<div class="success_modal">
    <div class="success_backdrop_modal">
      <div class="modal">
        <img class="logo-img" src="./gallery/icons/modal/success.png" alt="">
        <h2>Success!</h2>
        <p>Your password is succesfully created</p>
        <button class="continue_btn" data-action="open">Continue</button>
      </div>
    </div>
  </div>`
}