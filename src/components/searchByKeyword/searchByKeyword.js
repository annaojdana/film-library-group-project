import { renderCollection } from '../renderSearchMovie/renderSearchMovie';

const search_form = document.querySelector('[data-input]');
console.log(search_form);
const search_btn = document.querySelector('[data-search]');
console.log(search_btn);

function searchHandler() {
  const searchQuery = search_form.value;
  renderCollection(searchQuery);
}

search_btn.addEventListener('click', searchHandler);
search_form.addEventListener('keypress', function checkKey(event) {
  if (event.key === 'Enter') {
    searchHandler();
  }
});
