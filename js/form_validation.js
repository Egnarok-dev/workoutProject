const form = document.querySelector("form");

form.addEventListener("submit", onSendBtnClick);

function onSendBtnClick(event) {
  event.preventDefault();

  //Отримуємо посилання на input
  const userNameInput = document.getElementById("username_input");
  const userEmailInput = document.getElementById("email_input");
  const phoneInput = document.getElementById("phon_input");

  //Отримали значення полів (input)
  const userNameValue = userNameInput.value.trim();
  const userEmailValue = userEmailInput.value.trim();
  const phoneValue = phoneInput.value.trim();

  //Перевірка полів
  if (userNameValue === "") {
    showError(userNameInput, "Please enter your name");
  } else if (!/^[a-zA-Z]+$/.test(userNameValue)) {
    showError(userNameInput, "Please enter only Latin letters");
  } else if (userEmailValue === "") {
    showError(userEmailInput, "Please enter your email");
  } else if (
    !/^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,6}$/.test(userEmailValue)) {
    showError(userEmailInput, "Please check the spelling of your email");
  } else if (phoneValue === "") {
    showError(phoneInput, "Please enter your phone number");
  } else if (!/^\d+$/.test(phoneValue)) {
    showError(phoneInput, "Please enter numbers only");
  } else {
    form.submit();
  }
}

function showError(input, message) {
  //Отримали посилання на контейнер в який будемо виводити повідомлення про помилку
  const errorContainer = input.parentNode.querySelector(".error_message");

  if (errorContainer) {
    errorContainer.textContent = message;
  } else {
    // Створили новий контейнер, якщо попередньо не був створений
    const newErrorContainer = document.createElement("div");
    newErrorContainer.classList.add("error_message");
    newErrorContainer.textContent = message;
    input.parentNode.insertBefore(newErrorContainer, input);
  }

  // Вішаємо рамку
  input.classList.add("error");
}

//Видалити повідомлення після вірного введення

form.addEventListener("input", function (event) {
  const input = event.target;
  const errorContainer = input.parentNode.querySelector(".error_message");
  if (errorContainer) {
    //Видаляємо повідомлення про помилку
    errorContainer.remove();
    //Видаляємо клас помилки
    input.classList.remove("error");
  }
});
