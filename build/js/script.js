'use strict';

// Mobile-menu

var navToggle = document.querySelector('.header__toggle-menu');
var navList = document.querySelector('.header__lower-block');

navList.classList.add('block-close');

var toggleMenu = function () {
  navList.classList.toggle('block-close');
};

var initMobileMenu = function () {
  if (navToggle) {
    navToggle.addEventListener('click', toggleMenu);
  }
};

initMobileMenu();

// Log In

var linksLogIn = document.querySelectorAll('.link-login');
var overlayPopup = document.querySelector('.login-overlay');
var buttonClosePopup = document.querySelector('.login__button-close');
var userEmail = overlayPopup.querySelector('[name=email]');
var userPassword = overlayPopup.querySelector('[name=password]');

var storage = localStorage.getItem('name');

var onButtonLogInClick = function (evt) {
  evt.preventDefault();
  if (!overlayPopup.classList.contains('login-active')) {
    overlayPopup.classList.add('login-active');
  }
  document.body.classList.add('scroll-lock');

  if (storage) {
    userEmail.value = storage;
    userPassword.focus();
    return;
  }
  userEmail.focus();
};

var hidePopup = function () {
  if (overlayPopup.classList.contains('login-active')) {
    overlayPopup.classList.remove('login-active');
  }
  document.body.classList.remove('scroll-lock');
};

var onButtonCloseClick = function () {
  hidePopup();
};

var onKeyEscKeydown = function (evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    hidePopup();
  }
};

var onOverlayClick = function (evt) {
  if (!evt.target.closest('.login')) {
    hidePopup();
  }
};

var initPopup = function () {
  if (!overlayPopup) {
    return;
  }
  linksLogIn.forEach(function (link) {
    link.addEventListener('click', onButtonLogInClick);
  });
  buttonClosePopup.addEventListener('click', onButtonCloseClick);
  document.addEventListener('keydown', onKeyEscKeydown);
  overlayPopup.addEventListener('click', onOverlayClick);
};

initPopup();

// Validate form

var removeError = function (form) {
  var errors = form.querySelectorAll('.check-input');
  errors.forEach(function (error) {
    error.classList.remove('check-input');
  });
};

var addLocalStorage = function () {
  if (userEmail) {
    localStorage.setItem('name', userEmail.value);
  }
};

var onFormSubmit = function (evt) {
  evt.preventDefault();
  var inputs = evt.target.querySelectorAll('input');

  var checkInputsValidity = function () {
    var flag = true;
    inputs.forEach(function (input) {
      if (!input.value) {
        input.classList.add('check-input');
        flag = false;
        return;
      }
      input.classList.remove('check-input');
    });
    return flag;
  };

  if (checkInputsValidity()) {
    removeError(evt.target);
    addLocalStorage();
    setTimeout(function () {
      evt.target.reset();
      hidePopup();
    }, 1000);
  }
};

var initValidateForm = function () {
  var form = document.querySelector('.login__form form');
  form.noValidate = true;
  form.addEventListener('submit', onFormSubmit);
};

initValidateForm();

// Slider

var sliderWindow = document.querySelector('.slider__window');
var sliderList = document.querySelector('.slider__list');
var sliderLinks = document.querySelectorAll('.slider__link');
var buttonNext = document.querySelector('.slider__arrow--next');
var buttonPrev = document.querySelector('.slider__arrow--prev');
var buttonsPagination = document.querySelectorAll('.slider__button-pagination');
var count = 0;
var shiftQuantity;
var widthSliderWindow;

var scrollSlider = function () {
  sliderList.style.transform = 'translateX(-' + (widthSliderWindow + 30) * count + 'px)';
};

var isFinishSlider = function () {
  if (count === 0) {
    buttonPrev.classList.add('slider__arrow--disabled');
  } else if (count > 0) {
    buttonPrev.classList.remove('slider__arrow--disabled');
  }

  if (count >= shiftQuantity) {
    buttonNext.classList.add('slider__arrow--disabled');
  } else if (count < shiftQuantity) {
    buttonNext.classList.remove('slider__arrow--disabled');
  }
};

var addStyleActive = function (elem) {
  buttonsPagination.forEach(function (button) {
    button.classList.remove('slider__button-pagination--active');
  });
  elem.classList.add('slider__button-pagination--active');
};

var NextSlide = function () {
  if (count <= shiftQuantity) {
    count++;
    scrollSlider();
    isFinishSlider();
    buttonsPagination.forEach(function (button, index) {
      if ((index) === count) {
        addStyleActive(button);
      }
    });
  }
};

var PrevSlide = function () {
  if (count > 0) {
    count--;
    scrollSlider();
    isFinishSlider();
    buttonsPagination.forEach(function (button, index) {
      if (index === count) {
        addStyleActive(button);
      }
    });
  }
};

var openSelectedSlide = function () {
  buttonsPagination.forEach(function (button, index) {
    button.addEventListener('click', function () {
      count = index;
      isFinishSlider();
      scrollSlider();
      addStyleActive(button);
    });
  });
};

var openFirstSlide = function () {
  count = 0;
  scrollSlider();
  addStyleActive(buttonsPagination[0]);
};

var adaptContent = function () {
  sliderLinks.forEach(function (link) {
    widthSliderWindow = sliderWindow.offsetWidth;
    if (widthSliderWindow >= 964) {
      link.style.width = (widthSliderWindow - 90) / 4 + 'px';
      shiftQuantity = 2;
    } else if (widthSliderWindow <= 963) {
      link.style.width = (widthSliderWindow - 30) / 2 + 'px';
      shiftQuantity = 5;
    }
  });
};

var initSlider = function () {
  sliderList.classList.remove('no-js');
  openFirstSlide();
  isFinishSlider();
  adaptContent();
  buttonNext.addEventListener('click', NextSlide);
  buttonPrev.addEventListener('click', PrevSlide);
  openSelectedSlide();
};

initSlider();
window.addEventListener('resize', initSlider);

// Accordion

var accordion = document.querySelector('.accordion');
var accordionContents = document.querySelectorAll('.accordion__content');
var accordionButtons = document.querySelectorAll('.accordion__button');

var initJs = function () {
  accordionContents.forEach(function (accordionContent) {
    accordionContent.classList.add('is-hidden');
  });
  accordionButtons.forEach(function (accordionButton) {
    accordionButton.classList.add('is-js');
  });
};

var initAccordion = function () {
  if (!accordion) {
    return;
  }
  initJs();
  var accordionItems = accordion.querySelectorAll('.accordion__item');

  accordion.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('accordion__button')) {
      var parent = evt.target.closest('.accordion__item');
      if (parent.classList.contains('is-active')) {
        parent.classList.remove('is-active');
        return;
      }
      accordionItems.forEach(function (el) {
        el.classList.remove('is-active');
      });
      parent.classList.add('is-active');
    }
  });
};

initAccordion();
