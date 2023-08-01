const verifyingAccountModal = document.querySelector('.js_verifying_account_modal');
const modal = createVerifyingAccountModal()

verifyingAccountModal.insertAdjacentHTML('beforeend', modal)

function createVerifyingAccountModal () {
    return `<div class="verifying_account_modal">
    <div class="verifying_account_backdrop_modal">
      <div class="modal">
        <button class="exit-btn" data-action="close-verifying_account-modal">
          <img src="./gallery/icons/modal/exit_btn.png" alt="" />
        </button>
        <img class="logo-img" src="./gallery/icons/modal/Logo.png" alt="">
        <h2>Enter your verification code</h2>
        <p>We texted your code to tranm•••••••@gm•••.com</p>
        <form action="">
        <label for="" class="number">
        <input type="text" maxlength="1" name="" id="" placeholder="*">
        <input type="text" maxlength="1" name="" id="" placeholder="*">
        <input type="text" maxlength="1" name="" id="" placeholder="*">
        <input type="text" maxlength="1" name="" id="" placeholder="*">
        <input type="text" maxlength="1" name="" id="" placeholder="*">
        <input type="text" maxlength="1" name="" id="" placeholder="*">
        </label>
        </form>
        <button class="create_new_pasword_btn" data-action="open-create-new-pasword-modal">Next</button>
        <button class="resend_btn">Resend</button>
      </div>
    </div>
  </div>`
}