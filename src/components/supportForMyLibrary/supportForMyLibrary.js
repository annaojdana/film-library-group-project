import checkStateBtns from "../checkStateBtns/checkStateBtns";
import getFromLocalStorage from "../getFromLocalStorage/getFromLocalStorage";
import setToLocalStorage from "../setToLocalStorage/setToLocalStorage";

const modalBtns = document.querySelectorAll('.modal__btns');

modalBtns.forEach(b => b.addEventListener("click", localStorageSupport));

checkStateBtns(modalBtns);

function localStorageSupport(evt) {
  const btn = evt.target;
  const {id, name} = btn.dataset;
  const idNumber = Number(id);

  if (!getFromLocalStorage(name)) {
    setToLocalStorage(name, []);
  }
  
  const get = getFromLocalStorage(name);
  if (get.includes(idNumber)) {
    const remove = get.filter(val => val !== val);
    setToLocalStorage(name, remove);
  } else {
    switch (name) {
      case "watched":
        const next = btn.nextElementSibling.dataset.name;
        if (!getFromLocalStorage(next)) {
          break;
        }
        const getNext = getFromLocalStorage(next);
        if (getNext.includes(idNumber)) {
          const removeNext = getNext.filter(val => val !== val);
          setToLocalStorage(next, removeNext);
        }
        break;

      case "queue":
        const prev = btn.previousElementSibling.dataset.name;
        if (!getFromLocalStorage(prev)) {
          break;
        }
        const getPrev = getFromLocalStorage(prev);
        if (getPrev.includes(idNumber)) {
          const removePrev = getPrev.filter(val => val !== val);
          setToLocalStorage(prev, removePrev);
        }
        break;
    
      default:
        break;
    }

    const save = [...get, idNumber];
    setToLocalStorage(name, save);
  }

  checkStateBtns(modalBtns);
};