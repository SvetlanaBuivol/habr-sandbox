const settingsButton = document.querySelector('.my-feed-setting-button');

settingsButton.addEventListener('click', onToggleMyFeedMenu);

function onToggleMyFeedMenu() {
  const menu = document.querySelector('.my-feed-menu');
  menu.classList.toggle('active');

  const settingsIcon = document.querySelector('.icon-my-feed-settings');
  settingsIcon.classList.toggle('rotated');
}