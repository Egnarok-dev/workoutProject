const securityCodeModal = document.querySelector('.js_security_code_modal');
const modal = createsecurityCodeModal()

securityCodeModal.insertAdjacentHTML('beforeend', modal)

function createsecurityCodeModal () {
    return `<div class="security_code_modal">
    <div class="security_code_backdrop_modal">
      <div class="modal">
        <button class="exit-btn" data-action="close-security-code-modal">
          <img src="./gallery/icons/modal/exit_btn.png" alt="" />
        </button>
        <img class="logo-img" src="./gallery/icons/modal/Logo.png" alt="">
        <h2>Enter your security code</h2>
        <p>We texted your code to tranm••••••@gm•••.com</p>
        <form action="">
        <label for="" class="number">
          <input type="text" maxlength="1" name="" id="" placeholder="*">
          <input type="text" maxlength="1" name="" id="" placeholder="*">
          <input type="text" maxlength="1" name="" id="" placeholder="*">
          <input type="text" maxlength="1" name="" id="" placeholder="*">
          <input type="text" maxlength="1" name="" id="" placeholder="*">
          <input type="text" maxlength="1" name="" id="" placeholder="*">
        </label>
        <button class="user_account_btn" data-action="open-user-account">Continue</button>
        </form>        
      </div>
    </div>
  </div>`
}