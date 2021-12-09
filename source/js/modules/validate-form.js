import {hidePopup} from './popup';

const userEmail = document.querySelector('.login__form [name=email]');

const removeError = function (form) {
  const errors = form.querySelectorAll('.check-input');
  errors.forEach(function (error) {
    error.classList.remove('check-input');
  });
};

const addLocalStorage = function () {
  if (userEmail) {
    localStorage.setItem('name', userEmail.value);
  }
};

const onFormSubmit = function (evt) {
  evt.preventDefault();
  const inputs = evt.target.querySelectorAll('input');

  const checkInputsValidity = function () {
    let flag = true;
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

export const initValidateForm = function () {
  const form = document.querySelector('.login__form form');
  if (!form) {
    return;
  }
  form.noValidate = true;
  form.addEventListener('submit', onFormSubmit);
};
