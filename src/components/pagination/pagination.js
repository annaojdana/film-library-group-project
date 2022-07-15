import './pagination.scss';
import './pagination-mediaQuery';

import getFromLocalStorage from '../getFromLocalStorage/getFromLocalStorage';

const element = document.querySelector('.pagination ul');
//calling function with passing parameters and adding inside element which is ul tag

// ! ! ! ! ! Zmienna dla ilości wyświetlanych kart na stronie ! ! ! ! !
// By zmienić ilość wyświetlanych kart na stronie w My Library,
// Wystarczy zmienić wartość zmiennej na żądaną ilość
export const CARDS_PER_PAGE = 3;

// Funkcja dla obsługi paginacji dla strony "My library"
function getTotalPagesForMyLibrary() {
  // Wybranie głownego kontenera dla jego atrybutu [data-output-type]
  const markupOutput = document.querySelector('[data-output-type]');
  // Zmienna dla przechowania rekordów z localStorage
  let idArray = [];
  // Zmienna dla klucza pobierania danych z localStorage
  let whatToOutput;
  // Zmienna dla obliczenia całkowitej ilości stron
  let totalPages;

  if (markupOutput.dataset.outputType === '') {
    whatToOutput = 'queue';
  } else {
    whatToOutput = markupOutput.dataset.outputType;
  }

  // Załadowanie tablicy z ID filmów
  idArray = getFromLocalStorage(whatToOutput);
  // Operator obliczeń ilości kart na stronę
  const totalCards = idArray.length;

  if (totalCards < CARDS_PER_PAGE || totalCards === CARDS_PER_PAGE) {
    totalPages = 1;
  }
  if (totalCards > CARDS_PER_PAGE) {
    totalPages = Math.floor(totalCards / CARDS_PER_PAGE);
    if (totalCards % CARDS_PER_PAGE !== 0) {
      totalPages += 1;
    }
  }
  return totalPages;
}

export function createPagination(totalPages, page) {
  // Wywołanie funkcji dla My Library
  if (window.location.pathname === '/myLibrary.html') {
    console.log('Paginacja: pobieranie ilości stron dla generacji szukajki');
    totalPages = getTotalPagesForMyLibrary();
  }

  let liTag = '';
  let active;
  let beforePage = page - 1;
  let afterPage = page + 1;

  if (page > 1) {
    //show the next button if the page value is greater than 1
    liTag += `<li class="pag-btn prev" data-page="${page - 1}" id="page_${
      page - 1
    }"></li>`;
  }

  if (page > 3 && window.innerWidth > 768) {
    //if page value is less than 2 then add 1 after the previous button
    liTag += `<li class="first numb mobile" data=page="1" id="page_1">1</li>`;
    if (page > 4) {
      if (totalPages > 6) {
        //if page value is greater than 3 then add this (...) after the first li or page
        liTag += `<li class="dots mobile" data-page="dots">...</li>`;
      }
    }
  }

  // how many pages or li show before the current li
  if (page == totalPages) {
    beforePage = beforePage - 1;
  } else if (page == totalPages - 1) {
    beforePage = beforePage;
  }

  // how many pages or li show after the current li
  if (page == 1) {
    afterPage = afterPage + 1;
  } else if (page == 2) {
    afterPage = afterPage;
  }

  for (let plength = beforePage - 1; plength <= afterPage + 1; plength++) {
    if (plength > totalPages) {
      //if plength is greater than totalPage length then continue
      continue;
    }

    if (plength < 0) {
      plength = plength + 2;
    }

    if (plength == 0) {
      //if plength is 0 than add +1 in plength value
      plength = plength + 1;
    }

    if (page == plength) {
      //if page is equal to plength than assign active string in the active variable
      active = 'active';
    } else {
      //else leave empty to the active variable
      active = '';
    }

    liTag += `<li class="numb ${active}" data-page="${plength}" id="page_${plength}">${plength}</li>`;
  }

  if (page < totalPages - 2 && window.innerWidth > 768) {
    //if page value is less than totalPage value by -2 then show the last li or page
    if (page < totalPages - 3) {
      if (totalPages > 6) {
        //if page value is less than totalPage value by -3 then add this (...) before the last li or page
        liTag += `<li class="dots mobile" data-page="dots">...</li>`;
      }
    }
    liTag += `<li class="last numb mobile" data-page="${totalPages}"  id="page_${totalPages} ">${totalPages}</li>`;
  }

  if (page < totalPages) {
    //show the next button if the page value is less than totalPage(20)
    liTag += `<li class="pag-btn next" data-page="${page + 1}" id="page_${
      page + 1
    }"></li>`;
  }

  element.innerHTML = liTag; //add li tag inside ul tag
  return liTag; //reurn the li tag
}

export function removePagination() {
  element.innerHTML = '';
}
