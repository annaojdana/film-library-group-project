export default function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
};