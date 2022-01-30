// прилипающая шапка со сменным лого в зависимости от того какая сейчас страница
window.onscroll = function showHeader() {
  let headerLogo = document.querySelector('.logo__image');
  let header = document.querySelector('.header');
  // если ширина экрана больше 1600px
  if (window.screen.width > 1600 && header.classList.contains('sticky')) {
    // меняем логотип на товарный знак
    headerLogo.src = 'img/trademark.svg';
  } else if (window.screen.width <= 1600 && header.classList.contains('sticky')) {
    // если меньше - меняем на тёмный лого
    headerLogo.src = 'img/logo-rus.svg';
  } else {
    // иначе ставим белый лого
    headerLogo.src = 'img/logo-rus--wh.svg';
  }

}

// прилипающая шапка со сменным лого в зависимости от того какая сейчас страница
window.onscroll = function changelogo() {
  let headerLogo = document.querySelector('.logo__image');
  let header = document.querySelector('.header');
  // если ширина экрана больше 1600px
  if (window.screen.width > 1600 && header.classList.contains('sticky')) {
    // меняем логотип на товарный знак
    headerLogo.src = 'img/trademark.svg';
  } else if (window.screen.width <= 1600 && header.classList.contains('sticky')) {
    // если меньше - меняем на тёмный лого
    headerLogo.src = 'img/logo-rus.svg';
  } else {
    // иначе ставим белый лого
    headerLogo.src = 'img/logo-rus--wh.svg';
  }

}

// window.onscroll = function showHeader() {
//   let header = document.querySelector('.header');
//   let headerLogo = document.querySelector('.logo__image');
//
//   if (window.pageYOffset > header.offsetHeight) {
//     header.classList.add('sticky');
//
//     if ( (document.location.pathname === '/home.html') && window.screen.width > 1600 || (document.location.pathname === '/Demetra-basic/home.html') && window.screen.width > 1600 ) {
//       headerLogo.src = 'img/trademark.svg';
//     } else if ( (document.location.pathname === '/home.html') && window.screen.width <= 1600 || (document.location.pathname === '/Demetra-basic/home.html') && window.screen.width <= 1600 ) {
//       headerLogo.src = 'img/logo-rus.svg';
//     }
//
//   } else {
//     header.classList.remove('sticky');
//     if ((document.location.pathname === '/home.html') || (document.location.pathname === '/Demetra-basic/home.html')) {
//       headerLogo.src = 'img/logo-rus--wh.svg';
//     }
//   }
// }