const footerContainer = document.querySelector('.footer_container');
const footer = createFooter()

footerContainer.insertAdjacentHTML('beforeend', footer)

function createFooter () {
    return `<footer>
    <div class="content">
      <div class="logo_whith_description">
        <a href=""><img src="./gallery/icons/header/header_white_logo.png" alt="" /></a>
        <p>
          Get fit, stay healthy, and live life on their terms without fitness
          being an obstacle.
        </p>
      </div>
      <div class="menu_list">
        <div class="top_menu">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="programs.html">Programs</a></li>
            <li><a href="membership.html">Membership</a></li>
          </ul>
        </div>
        <div class="lower_menu">
          <ul>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="about_us.html">About Us</a></li>
          </ul>
        </div>
      </div>
      <div class="aside_box">
        <div class="newslatter">
          <a href="">Newsletter</a>
        </div>
        <div class="active_box">
          <input type="email" placeholder="Your email here" />
          <button>Send</button>
        </div>
      </div>
    </div>
    <div class="lower_border"></div>
    <div class="lower_box_content">
      <p>© 2022 Nguli® Global Inc.</p>
      <div class="social_media_list">
        <ul>
          <li>
            <a href=""><img src="./gallery/icons/footer_social_media_list_1.png" alt="" /></a>
          </li>
          <li>
            <a href=""><img src="./gallery/icons/footer_social_media_list_2.png" alt="" /></a>
          </li>
          <li>
            <a href=""><img src="./gallery/icons/footer_social_media_list_3.png" alt="" /></a>
          </li>
          <li>
            <a href=""><img src="./gallery/icons/footer_social_media_list_4.png" alt="" /></a>
          </li>
          <li>
            <a href=""><img src="./gallery/icons/footer_social_media_list_5.png" alt="" /></a>
          </li>
        </ul>
      </div>
      <div class="policy_info">
        <ul>
          <li><a href="terms_of_service.html">Terms of Service</a></li>
          <li><a href="privacy_police.html">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
  </footer>`
}