import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

let userData;

const firebaseConfig = {
  apiKey: "AIzaSyCC3mD4FW2IKPZCow3f4j_qBBzvMhV7X9M",
  authDomain: "workout-aa9a2.firebaseapp.com",
  projectId: "workout-aa9a2",
  storageBucket: "workout-aa9a2.appspot.com",
  messagingSenderId: "1068857536837",
  appId: "1:1068857536837:web:e929ebba86ecb1bd2b0e2c"
};

//Ініціалізація firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//Беремо посилання на DOM елементи
const loginWhithGoogleBtn = document.querySelector(".signUpWithGoogle");
const signUpBtn = document.querySelector(".sign_up-btn");
const logoutBtn = document.querySelector(".logout-button");

//Отримує стaн авторизації юзера
auth.onAuthStateChanged((user) => {
  if (user) {
    const saveUserData = localStorage.getItem("user");
    if (saveUserData) {
      userData = JSON.parse(saveUserData);
    }
    signUpBtn.style.display = "none";
    logoutBtn.style.display = "block";
    document.body.classList.remove("show-modal")
  } else {
    signUpBtn.style.display = "block";
    logoutBtn.style.display = "none";
  }
});

//Перевіряємо наявність даних користувача в Local Storage при завантажені сторінки

window.addEventListener("load", () => {
  const savedUser = localStorage.getItem("user")
  if (savedUser) {
    const user = JSON.parse(savedUser)
    signUpBtn.style.display = "none";
    logoutBtn.style.display = "block";
  
    console.log("Loged in", user.displayName);
  }
})

//Обробник подій кліку на кнопку увійти

loginWhithGoogleBtn.addEventListener('click', () => {
  console.log('Тут є клік?');
  const provider = new GoogleAuthProvider()
  //Запускаємо процес аутентифікації
  signInWithPopup(auth, provider)
  .then((result) => {
    //Успішна авторизація
    const user = result.user
      console.log("Loged in", user.displayName);
      console.dir(user);
      localStorage.setItem("user", JSON.stringify(user))
  }) .catch((error) => {
    const errorMessage = error.message
    console.error("Loggin error", errorMessage);
  })
})

//Обробник подій кліку на кнопку вийти 

logoutBtn.addEventListener("click", () => {
  //Вийти із системи
  console.log("Подія?");
  signOut(auth)
  .then(() => {
    console.error("Logged out", localStorage.removeItem("user"));
  })
  .catch((error) => {
    //Помилка виходу
    const errorMessage = error.message
    console.error("Logout error", errorMessage);
  })
})


