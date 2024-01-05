const dropdownBtn = document.querySelector('.header-dropdown-button');

function toggleDropdown() {
    const dropdownContent = document.getElementById('dropdown-content');
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';

    dropdownBtn.classList.toggle('rotated')
}

dropdownBtn.addEventListener('click', toggleDropdown)