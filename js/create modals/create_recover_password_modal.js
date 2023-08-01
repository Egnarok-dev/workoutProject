const recoverPasswordModal = document.querySelector(
  ".js_recover_password_modal"
);
const modal = createRecoverPasswordModal();

recoverPasswordModal.insertAdjacentHTML("beforeend", modal);

function createRecoverPasswordModal() {
  return `<div class="recover_password_modal">
    <div class="password_backdrop_modal">
      <div class="modal">
        <button class="exit-btn" data-action="close-recover_password-modal">
          <img src="./gallery/icons/modal/exit_btn.png" alt="" />
        </button>
        <img class="logo-img" src="./gallery/icons/modal/Logo.png" alt="">
        <h2>Reset Password</h2>
        <p>Recover your account password</p>
        <form action="">
        <label class="email_box">
          Email
          <input type="email" name="email" placeholder="Enter your email" />
        </label>
        </form>   
        <button class="verifying_account_btn" data-action="open-verifying-account-modal">Next</button>     
      </div>
    </div>
  </div>`;
}
