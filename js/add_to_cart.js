function addToCart(planName, planPrice) {
    // Отримуємо посилання на елементи корзини
    const planElement = document.querySelector('.plan');
    const priceElement = document.querySelector('.price');
  
    // Оновлюємо текст елементів корзини з отриманими значеннями
    planElement.textContent = planName;
    priceElement.textContent = planPrice;
  }
  
  // Отримуємо посилання на всі кнопки "Purchase Plan"
  const purchaseButtons = document.querySelectorAll('.btn_plan');
  
  // Додаємо обробник події для кожної кнопки "Purchase Plan"
  purchaseButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      // Отримуємо назву і ціну плану з карточки, на яку натиснули кнопку
      const planName = this.parentNode.querySelector('.type_plan').textContent;
      const planPrice = this.parentNode.querySelector('.price').textContent;
  
      // Викликаємо функцію addToCart з отриманими значеннями назви і ціни
      addToCart(planName, planPrice);
    });
  });