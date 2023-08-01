const headerContainer = document.querySelector('.header_container');
const header = createHeader()

headerContainer.insertAdjacentHTML('beforeend', header)

function createHeader () {
    return `<header>
    <nav>
      <div class="nav_logo">
        <a href="index.html">
          <img src="./gallery/icons/header/header_white_logo.png" alt="" />
        </a>
      </div>
      <div class="burger_menu">
        <span></span>
      </div>
      <div class="nav_menu">
        <div class="header_menu">
          <ul class="menu_categories">
            <li><a href="index.html">Home</a></li>
            <li><a href="programs.html">Programs</a></li>
            <li><a href="trainers.html">Trainers</a></li>
            <li><a href="membership.html">Membership</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <ul class="menu_bar">
          <li>
            <button class="open_cart-btn" data-action="open_cart_modal">
              <img src="./gallery/icons/header/header_white_cart.png" alt="" />
            </button>
          </li>
          <li>
            <button class="log_in-btn" data-action="open-sign-in-modal">
              Log In
            </button>
          </li>
          <li>
            <button class="sign_up-btn" data-action="open-sign-up-modal">
              Sign Up
            </button>
          </li>
          <li>
            <button class="logout-button auth">Exit</button>
          </li>
        </ul>
      </div>
    </nav>
  </header>`
}