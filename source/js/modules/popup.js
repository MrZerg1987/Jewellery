import {isEscEvent} from '../utils/utils';

const linksLogIn = document.querySelectorAll('.link-login');
const overlayPopup = document.querySelector('.login-overlay');
const buttonClosePopup = document.querySelector('.login__button-close');
const userEmail = document.querySelector('.login__form [name=email]');
const userPassword = document.querySelector('.login__form [name=password]');

let storage = localStorage.getItem('name');

export const hidePopup = () => {
  overlayPopup.classList.remove('login-active');
  document.body.classList.remove('scroll-lock');
};

const openPopup = () => {
  overlayPopup.classList.add('login-active');
  document.body.classList.add('scroll-lock');
};

const onButtonLogInClick = (evt) => {
  evt.preventDefault();
  if (!overlayPopup.classList.contains('login-active')) {
    openPopup();
  }

  if (storage) {
    userEmail.value = storage;
    userPassword.focus();
    return;
  }
  userEmail.focus();
};

const onButtonCloseClick = () => {
  if (overlayPopup.classList.contains('login-active')) {
    hidePopup();
  }
};

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
  if (!overlayPopup || !buttonClosePopup) {
    return;
  }
  linksLogIn.forEach((link) => {
    link.addEventListener('click', onButtonLogInClick);
  });
  overlayPopup.addEventListener('click', onOverlayClick);
  buttonClosePopup.addEventListener('click', onButtonCloseClick);
  document.addEventListener('keydown', onKeyEscKeydown);
};
