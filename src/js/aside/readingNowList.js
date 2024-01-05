import posts from '../../data/readingNowPosts';
import formatNumber from '../../utils/helpers/formatNumber';

const createReadingNowMarkup = (post, index) => {
  const { title, views, comments, newComments, label } = post;

  const formattedViews = formatNumber(views);

  if (index < 5) {
    return `
        <li class="aside-reading-now-item">
              <a href="#" class="aside-reading-now-link">${title}</a>
              <div class="aside-reading-now-info">
                <svg class="icon-views" width="24" height="24">
                  <title>Количество просмотров</title>
                  <use xlink:href="./assets/svg/svg-defs.svg#icon-views"></use>
                </svg>
                <p>${formattedViews}</p>
                <a href="#" class="aside-reading-now-comments-link">
                  <svg class="icon-chat" width="16" height="16">
                    <title>Комментарии</title>
                    <use xlink:href="./assets/svg/svg-defs.svg#icon-chat"></use>
                  </svg>
                  <p>${comments}</p>
                  <p>+${newComments}</p>
                </a>
              </div>
            </li>
        `;
  } else if (index === 5) {
    return `
         <li class="aside-reading-now-item">
              <a href="#" class="aside-reading-now-link">${title}</a>
              <div class="aside-reading-now-label">${label}</div>
            </li>
        `;
  }
};

const readingNowListEl = document.querySelector('.aside-reading-now-list');
const makeReadingNowList = posts
  .map((post, index) => createReadingNowMarkup(post, index))
  .join('');

readingNowListEl.insertAdjacentHTML('beforeend', makeReadingNowList);
