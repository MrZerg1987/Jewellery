import {isEscEvent} from '../utils/utils';

const toggle = document.querySelector('.header__toggle-menu');
const header = document.querySelector('.header');
const navList = document.querySelector('.header__lower-block');
const navLinks = document.querySelectorAll('.main-nav__link');
const navAdditionalLinks = document.querySelectorAll('.main-nav__additional-link');
const formSearch = document.querySelector('.header__form-search');

const hideMenu = () => {
  if (!navList.classList.contains('block-close')) {
    navList.classList.add('block-close');
    header.classList.remove('is-open');
    document.body.classList.remove('scroll-lock');
  }

  if (!formSearch.classList.contains('block-close')) {
    formSearch.classList.add('block-close');
  }
};

const openMenu = () => {
  navList.classList.remove('block-close');
  document.body.classList.add('scroll-lock');
  header.classList.add('is-open');

  if (formSearch.classList.contains('block-close')) {
    formSearch.classList.remove('block-close');
  }

};

const onClickToggle = () => {
  if (navList.classList.contains('block-close') && formSearch.classList.contains('block-close')) {
    openMenu();
    return;
  }
  hideMenu();
};

const onClickNavLink = () => {
  hideMenu();
};

const onKeyEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    hideMenu();
  }
};

export const initMobileMenu = () => {
  if (!toggle || !navList || !formSearch) {
    return;
  }

  hideMenu();
  toggle.classList.remove('no-js');
  navList.classList.add('block-close');
  formSearch.classList.add('block-close');

  if (header.offsetWidth > 1024) {
    hideMenu();
  }
  toggle.addEventListener('click', onClickToggle);
  navLinks.forEach((link) => {
    link.addEventListener('click', onClickNavLink);
  });
  navAdditionalLinks.forEach((link) => {
    link.addEventListener('click', onClickNavLink);
  });
  document.addEventListener('keydown', onKeyEscKeydown);
  window.addEventListener('resize', initMobileMenu);
};
