"use strict";

window.onscroll = function showHeader() {
  var header = document.querySelector('.header');
  let headerLogo = document.querySelector('.logo__image');

  if (window.pageYOffset > header.offsetHeight) {
    header.classList.add('sticky');
    headerLogo.src = 'img/logo-rus.svg';
  } else {
    header.classList.remove('sticky');
    headerLogo.src = 'img/logo-rus--wh.svg';
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
    headerLogo.src = 'img/logo-rus--wh.svg';
  }
});











