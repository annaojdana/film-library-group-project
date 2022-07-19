import { Loading } from 'notiflix/build/notiflix-loading-aio';

window.addEventListener('load', spinnerStop);

export default function spinnerStop() {
  Loading.remove();
}