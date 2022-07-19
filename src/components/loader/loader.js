import { Loading } from 'notiflix/build/notiflix-loading-aio';

window.addEventListener('load', spinner);

export default function spinner() {
  Loading.standard({
    backgroundColor: 'rgba(0,0,0,0.8)',
    svgColor: '#FF6B08',
  });
}