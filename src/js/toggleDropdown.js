const dropdownBtnEl = document.querySelector('.header-dropdown-button');
const dropdownContentEl = document.querySelector('.dropdown-content');

dropdownBtnEl.addEventListener('click', onToggleDropdown);

function onToggleDropdown() {
  dropdownContentEl.style.display =
    dropdownContentEl.style.display === 'block' ? 'none' : 'block';
  dropdownBtnEl.classList.toggle('rotated');

  dropdownContentEl.style.display === 'block'
    ? document.addEventListener('click', onCloseDropdownOutside)
    : document.removeEventListener('click', onCloseDropdownOutside);
}

function onCloseDropdownOutside(event) {
  if (
    !dropdownBtnEl.contains(event.target) &&
    !dropdownContentEl.contains(event.target)
  ) {
    dropdownContentEl.style.display = 'none';
    dropdownBtnEl.classList.remove('rotated');
    document.removeEventListener('click', onCloseDropdownOutside);
  }
}
