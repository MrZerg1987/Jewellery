import {isEscEvent} from '../utils/utils';

const catalog = document.querySelector('.catalog');
const buttonOpenFilter = document.querySelector('.catalog__button-open-filter');
const buttonCloseFilter = document.querySelector('.filter__button-close');
const filter = document.querySelector('.filter-overlay');

const onButtonOpenFilterClick = () => {
  if (!filter.classList.contains('is-open')) {
    filter.classList.add('is-open');
  }
  document.body.classList.add('scroll-lock');
};

export const hideFilter = () => {
  if (filter.classList.contains('is-open')) {
    filter.classList.remove('is-open');
  }
  document.body.classList.remove('scroll-lock');
};

const onButtonCloseFilterClick = () => hideFilter();

const onKeyEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    hideFilter();
  }
};

export const initFilter = () => {
  if (!filter || !buttonOpenFilter) {
    return;
  }
  if (catalog.offsetWidth > 1024) {
    hideFilter();
  }
  buttonOpenFilter.addEventListener('click', onButtonOpenFilterClick);
  buttonCloseFilter.addEventListener('click', onButtonCloseFilterClick);
  document.addEventListener('keydown', onKeyEscKeydown);
  window.addEventListener('resize', initFilter);
};
