import './footer.scss';

const yearInFooter = document.querySelector('.footer__year');
yearInFooter.innerHTML = new Date().getFullYear();