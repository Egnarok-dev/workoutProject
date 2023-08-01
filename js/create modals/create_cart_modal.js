
const cartModal = document.querySelector('.js_cart_modal');
const modal = createneCartModal()

cartModal.insertAdjacentHTML('beforeend', modal)

function createneCartModal () {
    return `<div class="cart_container_modal">
    <div class="cart_backdrop js_cart_backdrop">
      <div class="cart_modal">
        <div class="cart_header">
          <button class="exit_btn" data-action="close_cart_modal">
            <img src="gallery/icons/modal/exit_btn.png" alt="" />
          </button>
          <img src="./gallery/icons/modal/Logo.png" alt="" />
          <h2>A good choice!</h2>
        </div>
        <div class="good_item">
          <ul class="good_list_name">
            <li>
              Your plan
              <div class="plan"></div>
            </li>
            <li>
              Price
              <div class="price"></div>
            </li>
          </ul>
          <div class="good_info"></div>
        </div>
        <a href="payment.html" class="make_order" data-action="send-sign-in-modal">Puchase Plan</a>
      </div>
    </div>
  </div>`
}