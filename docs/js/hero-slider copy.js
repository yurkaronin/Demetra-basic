// инициализация слайдера 
let prevSlideName = document.querySelector('.swiper-slide-prev .hero__title');
let prevButton = document.querySelector('.hero__button-prev span');


let swiper = new Swiper(".mySwiper", {
  // autoplay: true,
  loop: true,
  navigation: {
    nextEl: ".hero__button-next",
    prevEl: ".hero__button-prev",
  },
  on: {
    slideChange: function (swiper) {      
      // console.log(swiper.slides);
    // prevButton.textContent = prevSlideName.textContent;
      for (let slideItem of swiper.slides) {
        if (slideItem.classList.contains('swiper-slide-prev')) {
          console.log('Прошлый', slideItem);
        } else if (slideItem.classList.contains('swiper-slide-next')) {
          console.log('Следующий', slideItem);
        }
      };
    }
  }
});


// найти предыдущий и следующий слайды в слайдере и узнать их названия
// let prevSlideName = document.querySelector('.swiper-slide-prev .hero__title').textContent;


// function changeText() {


// let prevButtonText = document.querySelector('.hero__button-prev span');
// console.log(prevButtonText.textContent);

// prevButtonText.textContent = prevSlideName.textContent;

// }
// function changeText() {

  
// }





// let nextSlide = document.querySelector('.swiper-slide-next');
// console.log(nextSlide);

// найти кнопки навигации слайдером
// let prevButton = document.querySelector('.hero__button-prev');

// let nextButton = document.querySelector('.hero__button-next');

// подставлять название предыдущего и следующего слайда в текст соответствующих кнопок