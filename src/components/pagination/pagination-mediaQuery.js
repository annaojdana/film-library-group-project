function paginationSizeChange(query) {
  const mobile = document.querySelectorAll('.mobile');
  if (query.matches) {
    mobile.forEach(mobile => mobile.classList.add('display-none'));
  } else {
    mobile.forEach(mobile => mobile.classList.remove('display-none'));
  }
}

const mediaQuery = window.matchMedia('(max-width: 767px)');

paginationSizeChange(mediaQuery);
mediaQuery.addListener(paginationSizeChange);










