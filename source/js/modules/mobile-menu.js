const toggle = document.querySelector('.header__toggle-menu');
const header = document.querySelector('.header');
const navList = document.querySelector('.header__lower-block');
const navLinks = document.querySelectorAll('.main-nav__link');
const navAdditionalLinks = document.querySelectorAll('.main-nav__additional-link');
const formSearch = document.querySelector('.header__form-search');

toggle.classList.remove('no-js');
navList.classList.add('block-close');
formSearch.classList.add('block-close');

const toggleMenu = () => {
  if (navList.classList.contains('block-close')) {
    navList.classList.remove('block-close');
    document.body.classList.add('scroll-lock');
    header.classList.add('is-js');
    return;
  }
  navList.classList.add('block-close');
  header.classList.remove('is-js');
  document.body.classList.remove('scroll-lock');
};

const toggleFormSearch = () => {
  if (formSearch.classList.contains('block-close')) {
    formSearch.classList.remove('block-close');
    return;
  }
  formSearch.classList.add('block-close');
};

const onClickToggle = () => {
  toggleMenu();
  toggleFormSearch();
};

const onClickNavLink = () => {
  toggleMenu();
  toggleFormSearch();
};

export const initMobileMenu = () => {
  if (toggle) {
    toggle.addEventListener('click', onClickToggle);
  }
  navLinks.forEach((link) => {
    link.addEventListener('click', onClickNavLink);
  });
  navAdditionalLinks.forEach((link) => {
    link.addEventListener('click', onClickNavLink);
  });
};
