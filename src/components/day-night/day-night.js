import './day-night.scss';

const body = document.querySelector('body');
const toggle = document.querySelector('#theme-switch-toggle');
const footer = document.querySelector('.footer');
const copyright = document.querySelectorAll('.footer__copyright');
const modal = document.querySelector('.modal--wrapper');
const pagination = document.querySelector('.pagination__list');
const teamModal = document.querySelector('.team--wrapper');

toggle.addEventListener('change', () => {
  if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');
    footer.classList.remove('dark-theme--footer');
    copyright.forEach(element =>
      element.classList.remove('dark-theme--footer')
    );
    modal.classList.remove('dark-theme');
    pagination.classList.remove('dark-theme');
    teamModal.classList.remove('dark-theme');
  } else {
    body.classList.add('dark-theme');
    footer.classList.add('dark-theme--footer');
    copyright.forEach(element => element.classList.add('dark-theme--footer'));
    modal.classList.add('dark-theme');
    pagination.classList.add('dark-theme');
    teamModal.classList.add('dark-theme');
  }
});

export { body, toggle, footer, copyright, modal, pagination, teamModal };
