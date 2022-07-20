import dynamicChangeBtnsState from '../dynamicChangeBtnsState/dynamicChangeBtnsState';
import getFromLocalStorage from '../getFromLocalStorage/getFromLocalStorage';
import setToLocalStorage from '../setToLocalStorage/setToLocalStorage';

// Okno modalne
const modalWrapper = document.querySelector('.modal--wrapper');

// Bugfix - gdy brak klucza, stwórz go
if (localStorage.getItem('queue') === null) {
  localStorage.setItem('queue', '[]');
}
if (localStorage.getItem('watched') === null) {
  localStorage.setItem('watched', '[]');
}

modalWrapper.addEventListener('click', localStorageSupport);

if (modalWrapper.querySelector('.modal__btns')) {
  console.log('');
}

function localStorageSupport(evt) {
  if (evt.target.classList.contains('modal__btns')) {
    const btn = evt.target;
    const { id, name } = btn.dataset;
    const idNumber = Number(id);

    // Jeśli w lokalStorage nie ma klucza odpowiednio "watched" lub "queue" to utwórz pustą tablicę na filmy
    if (!getFromLocalStorage(name)) {
      setToLocalStorage(name, []);
    }

    const get = getFromLocalStorage(name);
    // Jeśli klucz odpowiednio "watched" lub "queue" zawiera id filmu to wykonaj
    if (get.includes(idNumber)) {
      const remove = get.filter(val => val !== idNumber);
      setToLocalStorage(name, remove);
    } else {
      switch (name) {
        case 'watched':
          const next = btn.nextElementSibling.dataset.name;
          if (!getFromLocalStorage(next)) {
            break;
          }
          const getNext = getFromLocalStorage(next);
          if (getNext.includes(idNumber)) {
            const removeNext = getNext.filter(val => val !== idNumber);
            // Notify Set to watched!

            setToLocalStorage(next, removeNext);
          }
          break;

        case 'queue':
          const prev = btn.previousElementSibling.dataset.name;
          if (!getFromLocalStorage(prev)) {
            break;
          }
          const getPrev = getFromLocalStorage(prev);
          if (getPrev.includes(idNumber)) {
            const removePrev = getPrev.filter(val => val !== idNumber);
            // Notify set to queue!

            setToLocalStorage(prev, removePrev);
          }
          break;

        default:
          break;
      }

      const save = [...get, idNumber];
      setToLocalStorage(name, save);
    }

    const btnsToCheck = [btn];
    if (btn.previousElementSibling) {
      const prev = btn.previousElementSibling;
      btnsToCheck.push(prev);
      dynamicChangeBtnsState(btnsToCheck);
    } else if (btn.nextElementSibling) {
      const next = btn.nextElementSibling;
      btnsToCheck.push(next);
      dynamicChangeBtnsState(btnsToCheck);
    }
  }
}
