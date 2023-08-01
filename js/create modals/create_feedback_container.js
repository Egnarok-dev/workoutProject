const feedbackContainer = document.querySelector('.feedback_container_js');
const container = createFeedbackContainer()

feedbackContainer.insertAdjacentHTML('beforeend', container)

function createFeedbackContainer () {
    return `<div class="feedback">
    <div class="container">
      <button class="btn">Review</button>
      <h2>
        What Our Happy <br />
        Clients Say
      </h2>
      <div class="review_box">
        <aside>
          <img src="./gallery/icons/feedback/fifth_screen_icon.png" alt="" />
        </aside>
        <div class="main">
          <span>Member Review</span>
          <ul class="cards_review fade">
            <li>
              <p class="client_review">
                Eget aliquet sit at lacinia. Magna consequat 
                consectetur maecenas amet sagittis mi. Mattis cursus 
                dolor amet quam commodo amet in sed dui. Risus risus 
                sed sed lectus.
              </p>
              <div class="client">
                <div class="client_photo">
                  <img
                    src="gallery/images/feedback/fifth_screen_client_photo.png"
                    alt=""
                  />
                </div>
                <div class="personal_info">
                  <p>Davis Rosser</p>
                  <span>Member</span>
                </div>
              </div>
            </li>
            <li>
              <p class="client_review">
                Lorem ipsum dolor sit amet consectetur, adipisicing 
                elit. Asperiores, inventore! Explicabo consequatur 
                harum, voluptates expedita 
                repellendus accusantium.
              </p>
              <div class="client">
                <div class="client_photo">
                  <img
                    src="gallery/images/feedback/fifth_screen_client_photo.png"
                    alt=""
                  />
                </div>
                <div class="personal_info">
                  <p>John Doe</p>
                  <span>Member</span>
                </div>
              </div>
            </li>
            <li>
              <p class="client_review">
                Lorem, ipsum dolor sit amet consectetur adipisicing 
                elit. In cum illo labore veritatis fuga harum assumenda
                delectus sint velit aspernatur voluptates reprehenderit 
                quidem, excepturi ratione?
              </p>
              <div class="client">
                <div class="client_photo">
                  <img
                    src="gallery/images/feedback/fifth_screen_client_photo.png"
                    alt=""
                  />
                </div>
                <div class="personal_info">
                  <p>Frank Smith</p>
                  <span>Member</span>
                </div>
              </div>
            </li>
          </ul>
          <div class="slider">
            <div class="dots-slider"></div>
          </div>
        </div>
      </div>
    </div>
  </div>`
}