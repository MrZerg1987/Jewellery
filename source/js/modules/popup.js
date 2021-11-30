import {isEscEvent} from '../utils/utils';

const linksLogIn = document.querySelectorAll('.link-login');
const overlayPopup = document.querySelector('.login-overlay');
const buttonClosePopup = document.querySelector('.login__button-close');
const userEmail = overlayPopup.querySelector('[name=email]');
const userPassword = overlayPopup.querySelector('[name=password]');

let storage = localStorage.getItem('name');

const onButtonLogInClick = (evt) => {
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

export const hidePopup = () => {
  if (overlayPopup.classList.contains('login-active')) {
    overlayPopup.classList.remove('login-active');
  }
  document.body.classList.remove('scroll-lock');
};

const onButtonCloseClick = () => hidePopup();

const onKeyEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    hidePopup();
  }
};

const onOverlayClick = (evt) => {
  if (!evt.target.closest('.login')) {
    hidePopup();
  }
};

export const initPopup = () => {
  if (!overlayPopup) {
    return;
  }
  linksLogIn.forEach((link) => {
    link.addEventListener('click', onButtonLogInClick);
  });
  buttonClosePopup.addEventListener('click', onButtonCloseClick);
  document.addEventListener('keydown', onKeyEscKeydown);
  overlayPopup.addEventListener('click', onOverlayClick);
};
