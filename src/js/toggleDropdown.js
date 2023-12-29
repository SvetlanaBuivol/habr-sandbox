function toggleDropdown() {
    var dropdownContent = document.getElementById('dropdown-content');
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';

    var dropdownBtn = document.querySelector('.header-dropdown-btn');

    dropdownBtn.classList.toggle('rotated')
}

document.querySelector('.header-dropdown-btn').addEventListener('click', toggleDropdown)