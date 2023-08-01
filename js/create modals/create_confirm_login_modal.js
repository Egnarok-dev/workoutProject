const confirmLoginModal = document.querySelector('.js_confirm_login_modal');
const modal = createConfirmLoginModal()

confirmLoginModal.insertAdjacentHTML('beforeend', modal)

function createConfirmLoginModal () {
    return `<div class="confirm_login_modal">
    <div class="confirm_login_backdrop_modal">
      <div class="modal">
        <button class="exit-btn" data-action="close-confirm-login-modal">
          <img src="./gallery/icons/modal/exit_btn.png" alt="" />
        </button>
        <img class="logo-img" src="./gallery/icons/modal/Logo.png" alt="">
        <h2>Let’s confirm it’s really you</h2>
        <p class="description">Help us secure your account. Please complete the verifications below</p>
        <label class="email_box">
          <div class="flex_box">
            <input type="radio" name="email"/ class="radio">
            <span class="custom_radio"></span>
            <p>Get the code by email at <br> joseph••••@gm•••.com</p>
          </div>
          <div class="flex_box">
            <input type="radio" name="email"/ class="radio">
            <span class="custom_radio"></span>
            <p>Get the code by text message <br> (SM) at +1 21 726 918</p>
          </div>
        </label>
        <button class="security_code_btn" data-action="open-security-code-modal">Next</button>
      </div>
    </div>
  </div>`
}