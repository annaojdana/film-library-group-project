export default function getFromLocalStorage(key) {
  try {
    const localData = localStorage.getItem(key);
    return JSON.parse(localData);
  }
  catch (error) {
    console.log(error.name + ": " + error.message);
  }
  
};