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