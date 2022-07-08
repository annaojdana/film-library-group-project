export default function setToLocalStorage(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}
