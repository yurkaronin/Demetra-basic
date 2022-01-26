"use strict";
// прилипающая шапка со сменным лого в зависимости от того какая сейчас страница
window.onscroll = function showHeader() {
  var header = document.querySelector('.header');
  let headerLogo = document.querySelector('.logo__image');

  if (window.pageYOffset > header.offsetHeight) {
    header.classList.add('sticky');
    if (document.location.pathname === '/home.html') {
      headerLogo.src = 'img/logo-rus.svg';
    }

  } else {
    header.classList.remove('sticky');
    if (document.location.pathname === '/home.html') {
      headerLogo.src = 'img/logo-rus--wh.svg';
    }
  }
}

// кнопка меню
var menuButton = document.querySelector('.button-menu');
var headerLogo = document.querySelector('.logo__image');

if (menuButton) {
  menuButton.addEventListener('click', function (r) {
    document.body.classList.toggle('custom-lock');
    document.body.classList.toggle('active');
    menuButton.classList.toggle('active');
  });

}

// Подмена лого в шапке, при открытом мобильном меню
menuButton.addEventListener('click', function (е) {
  if (menuButton.classList.contains('active')) {
    headerLogo.src = 'img/logo-rus.svg';
    console.log("Меняем на чёрный!");
  } else {
    if (document.location.pathname === '/home.html') {
      headerLogo.src = 'img/logo-rus--wh.svg';
    }

  }
});











