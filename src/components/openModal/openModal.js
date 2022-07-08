
export default function openModal(event) {
  if (event.target.className !== "item__image") {
    return;
  }
  const modal = document.querySelector('[data-modal]');

  console.log("event.target: ", event.target);
  modal.classList.remove('is-hidden');

}


