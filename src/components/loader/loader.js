import { Loading } from 'notiflix/build/notiflix-loading-aio';

window.addEventListener('load', loader);

export default function loader() {
  Loading.standard({
    backgroundColor: '#000',
    svgColor: '#FF6B08',
  });
}
