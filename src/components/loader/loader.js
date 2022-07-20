import {
  enableScrolling,
  disableScrolling,
} from '../scrollToggle/scrollToggle';

const loaderWrapper = document.querySelector('[data-loader-wrapper]');

export function displayLoader() {
  disableScrolling();
  loaderWrapper.classList.remove('hidden');
}

export function removeLoader() {
  enableScrolling();
  loaderWrapper.classList.add('hidden');
}

export function displayModalLoader() {
  const modalLoader = document.querySelector('[data-modal-loader]');
  modalLoader.classList.remove('hidden');
}

export function removeModalLoader() {
  const modalLoader = document.querySelector('[data-modal-loader]');
  modalLoader.classList.add('hidden');
}
