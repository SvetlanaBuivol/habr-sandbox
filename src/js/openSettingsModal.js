const headerOpenModalButtonEl = document.querySelector(
  '.sticky-header-settings-button'
);
const footerOpenModalButtonEl = document.querySelector('.footer-lang-button');
const modalEl = document.querySelector('.settings-modal');
const closeModalButtonEl = document.querySelector(
  '.setting-modal-close-button'
);

headerOpenModalButtonEl.addEventListener('click', onOpenModal);
footerOpenModalButtonEl.addEventListener('click', onOpenModal);

function onOpenModal() {
  modalEl.style.display = 'block';
  window.addEventListener('keydown', onEscClick);
  closeModalButtonEl.addEventListener('click', onCloseModal);
  modalEl.addEventListener('click', onBackdropClick);
}

function onCloseModal() {
  modalEl.style.display = 'none';
  window.removeEventListener('keydown', onEscClick);
}

function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    onCloseModal();
  }
}

function onEscClick(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}
