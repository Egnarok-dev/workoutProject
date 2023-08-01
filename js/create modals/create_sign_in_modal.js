const signInModal = document.querySelector('.js_sign_in_modal');
const modal = createSignInModal()

signInModal.insertAdjacentHTML('beforeend', modal)

function createSignInModal () {
    return `<div class="sign_in_modal" id="sign_in_modal">
    <div class="sign-up-backdrop js-backdrop js-sign-up-backdrop">
      <div class="modal">
        <button class="exit-btn" data-action="close-sign-in-modal">
          <img src="./gallery/icons/modal/exit_btn.png" alt="" />
        </button>
        <img class="logo-img" src="./gallery/icons/modal/Logo.png" alt="Logo" />
        <h2>Hey there, welome back!</h2>
        <form class="sign_in_box" autocomplete="off">
          <label class="email_box">
            Email
            <input type="email" name="email" placeholder="Enter your email" />
          </label>
          <label class="password_box">
            Password
            <div>
              <input type="password" name="password" placeholder="Enter your password" />
              <button>
                <img src="./gallery/icons/modal/eye-slash.png" alt="" />
              </button>
            </div>
          </label>
        </form>
        <button class="modal_btn" data-action="open-confirm-login-modal">Login</button>
        <button class="recover_password_btn" data-action="open-recover-password-modal">Forgot Password?</button>
      </div>
    </div>
  </div>`
}