const signUpModal = document.querySelector('.js_sign_up_modal');
const modal = createSignUpModal()

signUpModal.insertAdjacentHTML('beforeend', modal)

function createSignUpModal () {
    return `<div class="sign_up_modal" id="sign_up_modal">
    <div class="backdrop js-backdrop">
      <div class="modal">
        <button class="exit-btn" data-action="close-sign-up-modal">
          <img src="./gallery/icons/modal/exit_btn.png" alt="" />
        </button>
        <img class="logo-img" src="./gallery/icons/modal/Logo.png" alt="Logo" />
        <h2>Welcome to Workout</h2>
        <div class="other_account">
          <button class="signUpWithGoogle">
            <img src="./gallery/icons/modal/Icon - Google.png" alt="Google logo" />
            <p>Continue with Google</p>
          </button>
          <button>
            <img src="./gallery/icons/modal/Icon - Apple.png" alt="Apple logo" />
            <p>Continue with Apple</p>
          </button>
        </div>
        <div class="border_line">
          <div class="bottom_line"></div>
          <p>Or Sign Up with</p>
          <div class="bottom_line"></div>
        </div>
        <form class="sign_up_box" autocomplete="off">
          <label class="email_box">
            Email
            <input type="email" name="email" placeholder="Enter your email" />
          </label>
          <button data-action="send-sign-up-modal">
            <p>Continue</p>
          </button>
          <label class="checkbox">
            <input type="checkbox" />
            <p>
              I agree to Claraa
              <a href="terms_of_service.html">Terms of Use</a> and
              <a href="privacy_police.html">Privacy Policy</a>
            </p>
          </label>
        </form>
        <p class="bottom_text">
          Already have an account?
          <button data-action="open-other-modal">Log In</button>
        </p>
      </div>
    </div>
  </div>`
}