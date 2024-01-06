const dropdownBtnEl = document.querySelector('.header-dropdown-button');
const dropdownContentEl = document.querySelector('.dropdown-content');

dropdownBtnEl.addEventListener('click', toggleDropdown);

function toggleDropdown() {
  dropdownContentEl.style.display =
    dropdownContentEl.style.display === 'block' ? 'none' : 'block';
  dropdownBtnEl.classList.toggle('rotated');

  dropdownContentEl.style.display === 'block'
    ? document.addEventListener('click', closeDropdownOutside)
    : document.removeEventListener('click', closeDropdownOutside);
}

function closeDropdownOutside(event) {
  if (
    !dropdownBtnEl.contains(event.target) &&
    !dropdownContentEl.contains(event.target)
  ) {
    dropdownContentEl.style.display = 'none';
    dropdownBtnEl.classList.remove('rotated');
    document.removeEventListener('click', closeDropdownOutside);
  }
}
