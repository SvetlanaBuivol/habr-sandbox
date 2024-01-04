const headerOpenModalButtonEl = document.querySelector(
  '.sticky-header-settings-button'
);
const footerOpenModalButtonEl = document.querySelector('.footer-lang-button');
const modalEl = document.querySelector('.settings-modal');
const closeModalButtonEl = document.querySelector(
  '.setting-modal-close-button'
);

function openModal() {
  modalEl.style.display = 'block';
  closeModalButtonEl.addEventListener('click', closeModal);
  window.addEventListener('click', windowClick);
}

function closeModal() {
  modalEl.style.display = 'none';
  closeModalButtonEl.removeEventListener('click', closeModal);
  window.removeEventListener('click', windowClick);
}

function windowClick(e) {
  if (e.target === modalEl) {
    closeModal();
  }
}
headerOpenModalButtonEl.addEventListener('click', openModal);
footerOpenModalButtonEl.addEventListener('click', openModal);
