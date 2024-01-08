const settingsButton = document.querySelector('.my-feed-setting-button');
const menu = document.querySelector('.my-feed-menu');
const settingsIcon = document.querySelector('.icon-my-feed-settings');

settingsButton.addEventListener('click', onToggleMyFeedMenu);

function onToggleMyFeedMenu() {
  const isMyFeedMenuVisible = menu.classList.toggle('active');
  settingsIcon.classList.toggle('rotated');

  if (isMyFeedMenuVisible) {
    window.addEventListener('keydown', onEscapeKeydown);
  } else {
    closeMyFeedMenu();
  }
}

function closeMyFeedMenu() {
  menu.classList.remove('active');
  settingsIcon.classList.remove('rotated');
  window.removeEventListener('keydown', onEscapeKeydown);
}

function onEscapeKeydown(event) {
  if (event.code === 'Escape') {
    closeMyFeedMenu();
  }
}
