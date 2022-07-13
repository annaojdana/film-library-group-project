import { renderCollection } from '../renderSearchMovie/renderSearchMovie';

const search_form = document.querySelector('[data-input]');
console.log(search_form);
const search_btn = document.querySelector('[data-search]');
console.log(search_btn);
export let searchQuery;

function searchHandler() {
  searchQuery = search_form.value;
  if (searchQuery === '') {
    document.querySelector('.not-found').classList.remove('is-hidden');
    return;
  }else{
    document.querySelector('.not-found').classList.add('is-hidden');
  }
  renderCollection(searchQuery);
}

search_btn.addEventListener('click', searchHandler);
search_form.addEventListener('keypress', function checkKey(event) {
  if (event.key === 'Enter') {
    searchHandler();
  }
});
