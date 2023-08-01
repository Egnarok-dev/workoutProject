const popUpModal = document.querySelector(".js_pop_up_modal");
const modal = createPopUpModal();

popUpModal.insertAdjacentHTML("beforeend", modal);

function createPopUpModal() {
    return `<div class="pop_up_modal" id="pop_up_box">
        <div class="modal">
            <img src="./gallery/icons/about_us/second_screen_fitness-biceps.png" alt="">
            <h3>The time has come, join us!</h3>
            <div class="btn_pop_up_modal">
                <a href="membership.html" class="join_btn">Join</a>
                <button class="close_btn_pop_up">Close</button>
            </div>
        </div>
    </div>`;
}
