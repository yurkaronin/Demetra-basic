"use strict";
// прилипающая шапка со сменным лого в зависимости от того какая сейчас страница
window.onscroll = function showHeader() {
  var header = document.querySelector('.header');
  let headerLogo = document.querySelector('.logo__image');

  if (window.pageYOffset > header.offsetHeight) {
    header.classList.add('sticky');
    if ((document.location.pathname === '/home.html') || (document.location.pathname === '/Demetra-basic/home.html')) {
      headerLogo.src = 'img/logo-rus.svg';
    }

  } else {
    header.classList.remove('sticky');
    if ((document.location.pathname === '/home.html') || (document.location.pathname === '/Demetra-basic/home.html')) {
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
  } else {
    if ((document.location.pathname === '/home.html') || (document.location.pathname === '/Demetra-basic/home.html')) {
      headerLogo.src = 'img/logo-rus--wh.svg';
    }

  }
});

SmoothScroll({
  // Время скролла 400 = 0.4 секунды
  animationTime: 800,
  // Размер шага в пикселях
  stepSize: 75,

  // Дополнительные настройки:

  // Ускорение
  accelerationDelta: 30,
  // Максимальное ускорение
  accelerationMax: 2,

  // Поддержка клавиатуры
  keyboardSupport: true,
  // Шаг скролла стрелками на клавиатуре в пикселях
  arrowScroll: 50,

  // Pulse (less tweakable)
  // ratio of "tail" to "acceleration"
  pulseAlgorithm: true,
  pulseScale: 4,
  pulseNormalize: 1,

  // Поддержка тачпада
  touchpadSupport: true,
});











