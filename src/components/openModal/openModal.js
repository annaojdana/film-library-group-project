
export default function openModal(event) {
  if (event.target.className !== "item__image") {
    return;
  }

  const modal = document.querySelector('[data-modal]');
  modal.classList.remove('is-hidden');
}