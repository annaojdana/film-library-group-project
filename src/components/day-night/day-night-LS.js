import {
  body,
  toggle,
  footer,
  copyright,
  modal,
  pagination,
  teamModal,
} from './day-night';

const savedTheme = localStorage.getItem('theme');

toggle.addEventListener('change', event => {
  localStorage.setItem('theme', body.classList);
});

updateTheme();
checkboxChecked();
updateThemeAll();

function updateTheme() {
  if (savedTheme) {
    body.classList = savedTheme;
  }
}

function checkboxChecked() {
  if (savedTheme === 'dark-theme') {
    toggle.setAttribute('checked', true);
  }
}

function updateThemeAll() {
  if (savedTheme === 'dark-theme') {
    footer.classList.add('dark-theme--footer');
    copyright.forEach(element => element.classList.add('dark-theme--footer'));
    modal.classList.add('dark-theme');
    pagination.classList.add('dark-theme');
    teamModal.classList.add('dark-theme');
  }
}
