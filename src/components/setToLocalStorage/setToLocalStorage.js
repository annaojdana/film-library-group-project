export default function setToLocalStorage(key, value) {
  return localStorage.setItem(value, JSON.stringify(key));
}
