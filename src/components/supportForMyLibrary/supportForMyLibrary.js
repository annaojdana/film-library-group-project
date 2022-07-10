import dynamicChangeBtnsState from "../dynamicChangeBtnsState/dynamicChangeBtnsState";
import getFromLocalStorage from "../getFromLocalStorage/getFromLocalStorage";
import setToLocalStorage from "../setToLocalStorage/setToLocalStorage";

const modalWrapper = document.querySelector('.modal--wrapper');

modalWrapper.addEventListener("click", localStorageSupport);

if (modalWrapper.querySelector(".modal__btns")) {
  console.log("tak ma");
}

function localStorageSupport(evt) {
  if (evt.target.classList.contains("modal__btns")) {
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