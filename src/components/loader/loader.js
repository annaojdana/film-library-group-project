import { Loading } from 'notiflix/build/notiflix-loading-aio';

window.addEventListener('load', spinner);

export default function spinner() {
  Loading.standard({
    backgroundColor: '#000',
    svgColor: '#FF6B08',
  });
}