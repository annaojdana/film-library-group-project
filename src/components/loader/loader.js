import { Loading } from 'notiflix/build/notiflix-loading-aio';

// window.addEventListener("load", loader);

 export default function loader() {
   Loading.standard({
    clickToClose: true,
     svgSize: '100px',
    svgColor: '#FF6B08',
  });
}