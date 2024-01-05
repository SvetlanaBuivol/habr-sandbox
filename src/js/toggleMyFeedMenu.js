const settingsButton = document.querySelector('.my-feed-setting-button');

function toggleMyFeedMenu() {
  const menu = document.querySelector('.my-feed-menu');
  menu.classList.toggle('active');

  const settingsIcon = document.querySelector('.icon-my-feed-settings');
  settingsIcon.classList.toggle('rotated');
}

settingsButton.addEventListener('click', toggleMyFeedMenu);
