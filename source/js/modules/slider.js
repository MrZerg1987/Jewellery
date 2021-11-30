const sliderContainer = document.querySelector('.slider__container');

export const initSlider = () => {
  if (sliderContainer) {
    return new window.Swiper('.swiper', {
      spaceBetween: 30,
      grabCursor: true,
      simulateTouch: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
        renderBullet: (index, className) => {
          return `<span class="${className}">${index + 1}</span>`;
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          pagination: {
            el: '.swiper-pagination',
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
        },
        1024: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
      },
    });
  }
  return false;
};

window.addEventListener('resize', initSlider);
