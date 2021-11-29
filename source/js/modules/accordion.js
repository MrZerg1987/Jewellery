const accordions = document.querySelectorAll('.accordion');
const accordionContents = document.querySelectorAll('.accordion__content');
const accordionButtons = document.querySelectorAll('.accordion__button');

const initJs = function () {
  accordionContents.forEach(function (accordionContent) {
    accordionContent.classList.add('is-hidden');
  });
  accordionButtons.forEach(function (accordionButton) {
    accordionButton.classList.add('is-js');
  });
};

export const initAccordion = function () {
  if (!accordions) {
    return;
  }

  initJs();
  accordions.forEach(function (accordion) {
    // const accordionItems = accordion.querySelectorAll('.accordion__item');

    accordion.addEventListener('click', function (evt) {
      if (evt.target.classList.contains('accordion__button')) {
        const parent = evt.target.closest('.accordion__item');
        if (parent.classList.contains('is-active')) {
          parent.classList.remove('is-active');
          return;
        }
        // accordionItems.forEach(function (el) {
        //   el.classList.remove('is-active');
        // });
        parent.classList.add('is-active');
      }
    });
  });
};
