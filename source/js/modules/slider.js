import {Swiper} from '../vendor/swiper';

const sliderContainer = document.querySelector('.slider__container');
let widthSliderContainer = sliderContainer.offsetWidth;

const swipingOff = () => {
  if (widthSliderContainer >= 964) {
    sliderContainer.classList.add('swiper-no-swiping');
    return;
  }
  sliderContainer.classList.remove('swiper-no-swiping');
};

export const initSlider = () => {
  if (sliderContainer) {

    const swiper = new Swiper('.swiper', {
      spaceBetween: 30,
      grabCursor: true,
      simulateTouch: true,
      pagination: {
        clickable: true,
        el: '.swiper-pagination',
      },

      breakpoints: {
        320: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          pagination: {
            type: 'fraction',
            renderFraction: (currentClass, totalClass) =>
              `<span class="${currentClass}"></span>
              <span>of</span>
              <span class="${totalClass}"></span>`,
          },
        },

        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          pagination: {
            type: 'bullets',
            renderBullet: (index, className) => `<span class="${className}">${index + 1}</span>`,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },

        1024: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          pagination: {
            type: 'bullets',
            renderBullet: (index, className) => `<span class="${className}">${index + 1}</span>`,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
      },
    });
    swipingOff();
    swiper.slideTo(1, 0.5, false);
  }
};

window.addEventListener('resize', initSlider());

// const sliderContainer = document.querySelector('.slider__container');
// const sliderList = document.querySelector('.slider__list');
// const sliderLinks = document.querySelectorAll('.slider__link');
// const buttonNext = document.querySelector('.slider__arrow--next');
// const buttonPrev = document.querySelector('.slider__arrow--prev');
// const itemsPagination = document.querySelectorAll('.slider__pagination-item');
// const buttonsPagination = document.querySelectorAll('.slider__pagination-button');
// let count = 0;
// let shiftQuantity;
// let widthSliderContainer;

// const scrollSlider = function () {
//   sliderList.style.transform = 'translateX(-' + (widthSliderContainer + 30) * count + 'px)';
// };

// const addStyleActive = function (elem) {
//   buttonsPagination.forEach(function (button) {
//     button.classList.remove('active');
//   });
//   elem.classList.add('active');
// };

// const countPages = function () {
//   itemsPagination.forEach(function (item) {
//     if (item.classList.contains('active')) {
//       item.textContent = count + 1;
//     }
//   });
// };

// const isFinishSlider = function () {
//   if (count === 0) {
//     buttonPrev.classList.add('disabled');
//   } else if (count > 0) {
//     buttonPrev.classList.remove('disabled');
//   }

//   if (count >= shiftQuantity) {
//     buttonNext.classList.add('disabled');
//   } else if (count < shiftQuantity) {
//     buttonNext.classList.remove('disabled');
//   }
// };

// const onButtonNextClick = function () {
//   if (count <= shiftQuantity) {
//     count++;
//     scrollSlider();
//     isFinishSlider();
//     buttonsPagination.forEach(function (button, index) {
//       if ((index) === count) {
//         addStyleActive(button);
//       }
//     });
//     countPages();
//   }
// };

// const onButtonPrevClick = function () {
//   if (count > 0) {
//     count--;
//     scrollSlider();
//     isFinishSlider();
//     buttonsPagination.forEach(function (button, index) {
//       if (index === count) {
//         addStyleActive(button);
//       }
//     });
//     countPages();
//   }
// };

// const openSelectedSlide = function () {
//   buttonsPagination.forEach(function (button, index) {
//     button.addEventListener('click', function () {
//       count = index;
//       isFinishSlider();
//       scrollSlider();
//       addStyleActive(button);
//     });
//   });
// };

// const openFirstSlide = function () {
//   count = 0;
//   scrollSlider();
//   addStyleActive(buttonsPagination[0]);
//   countPages();
// };

// const adaptContent = function () {
//   sliderLinks.forEach(function (link) {
//     widthSliderContainer = sliderContainer.offsetWidth;
//     if (widthSliderContainer >= 964) {
//       link.style.width = (widthSliderContainer - 90) / 4 + 'px';
//       shiftQuantity = 2;
//     } else if (widthSliderContainer <= 963) {
//       link.style.width = (widthSliderContainer - 30) / 2 + 'px';
//       shiftQuantity = 5;
//     }
//   });
// };

// export const initSlider = () => {
//   if (sliderContainer) {
//     openFirstSlide();
//     isFinishSlider();
//     adaptContent();
//     buttonNext.addEventListener('click', onButtonNextClick);
//     buttonPrev.addEventListener('click', onButtonPrevClick);
//     openSelectedSlide();
//   }
// };

// window.addEventListener('resize', initSlider);
