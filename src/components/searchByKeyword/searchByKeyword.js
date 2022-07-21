import { displayLoader } from '../loader/loader';
import { renderCollection } from '../renderSearchMovie/renderSearchMovie';
export let searchQuery;

// Warunek dla sprawdzania zawartości whatToOutput,
// przy ładowaniu strony jest on wstępnie pusty

if (
  window.location.pathname === '/' ||
  window.location.pathname.includes('/index.html') ||
  window.location.pathname === '/film-library-group-project/' ||
  window.location.pathname.includes('/film-library-group-project/index.html')
) {
  const search_form = document.querySelector('[data-input]');
  const search_btn = document.querySelector('[data-search]');

  function searchHandler() {
    displayLoader();
    searchQuery = search_form.value;
    if (searchQuery === '') {
      document.querySelector('.not-found').classList.remove('display-none');
      return;
    } else {
      document.querySelector('.not-found').classList.add('display-none');
    }
    renderCollection(searchQuery, 1);
  }

  search_btn.addEventListener('click', searchHandler);
  search_form.addEventListener('keypress', function checkKey(event) {
    if (event.key === 'Enter') {
      searchHandler();
    }
  });
}
