const newPasswordModal = document.querySelector('.js_new_password_modal');
const modal = createnewPasswordModal()

newPasswordModal.insertAdjacentHTML('beforeend', modal)

function createnewPasswordModal () {
    return `<div class="new_password_modal">
    <div class="new_password_backdrop_modal">
      <div class="modal">
        <button class="exit-btn" data-action="close-new-password-modal">
          <img src="./gallery/icons/modal/exit_btn.png" alt="" />
        </button>
        <img class="logo-img" src="./gallery/icons/modal/Logo.png" alt="">
        <h2>Create New Password</h2>
        <div class="new_password_box">
          <label>
            Password
            <div>
              <input type="password" name="password" placeholder="Enter your password" />
              <button>
                <img src="./gallery/icons/sign_in_modal/eye-slash.png" alt="" />
              </button>
            </div>
          </label>
          <label>
            New Password
            <div>
              <input type="password" name="password" placeholder="Enter your password" />
              <button>
                <img src="./gallery/icons/sign_in_modal/eye-slash.png" alt="" />
              </button>
            </div>
          </label>
        </div>
        <button class="success_btn" data-action="open-success-modal">Next</button>
      </div>
    </div>
  </div>`
}