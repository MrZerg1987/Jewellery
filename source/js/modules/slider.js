import {Swiper} from '../vendor/swiper';

const sliderContainer = document.querySelector('.slider__container');

export const initSlider = function () {
  if (sliderContainer) {
    const swiper = new Swiper('.swiper', {
      spaceBetween: 30,
      grabCursor: true,
      simulateTouch: true,

      breakpoints: {
        320: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'fraction',
            renderFraction: (currentClass, totalClass) => {
              return `<span class="${currentClass}"></span>
                      <span>of</span>
                      <span class="${totalClass}"></span>`;
            },
          },
        },

        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            renderBullet: (index, className) => {
              return `<span class="${className}">${index + 1}</span>`;
            },
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },

        1024: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
      },
    });

    swiper.defaults();
  }
};

window.addEventListener('resize', initSlider);
