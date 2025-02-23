const loginScreen = document.getElementById('login-screen');
const mainPage = document.getElementById('main-page');
const loginButton = document.getElementById('login-button');

// Обработчик нажатия кнопки "Войти"
loginButton.addEventListener('click', () => {
  // Скрываем экран входа
  loginScreen.classList.add('hidden');
  
  // Показываем главную страницу
  mainPage.classList.remove('hidden');
});