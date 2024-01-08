const dropdownBtnEl = document.querySelector('.header-dropdown-button');
const dropdownContentEl = document.querySelector('.dropdown-content');

dropdownBtnEl.addEventListener('click', onToggleDropdown);

function onToggleDropdown() {
  const isDropdownVisible = dropdownContentEl.classList.toggle('show-dropdown');

  dropdownBtnEl.classList.toggle('rotated', isDropdownVisible);

  if (isDropdownVisible) {
    window.addEventListener('click', onCloseDropdownOutside);
    window.addEventListener('keydown', onEscapeKeydown);
  } else {
    removeEventListeners();
  }
}

function onCloseDropdownOutside(event) {
  if (
    !dropdownBtnEl.contains(event.target) &&
    !dropdownContentEl.contains(event.target)
  ) {
    closeDropdown();
  }
}

function closeDropdown() {
  dropdownContentEl.classList.remove('show-dropdown');
  dropdownBtnEl.classList.remove('rotated');
  removeEventListeners();
}

function onEscapeKeydown(event) {
  if (event.code === 'Escape') {
    closeDropdown();
  }
}

function removeEventListeners() {
  window.removeEventListener('click', onCloseDropdownOutside);
  window.removeEventListener('keydown', onEscapeKeydown);
}
