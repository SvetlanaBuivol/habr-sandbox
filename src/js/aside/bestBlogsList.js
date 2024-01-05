import bestBlogs from '../../data/bestBlogs';

const createBestBlogsMarkup = ({ img, name, rating }) => {
  return `
      <li class="aside-best-blogs-item">
              <a href="#" class="aside-best-blogs-link">
                <img
                  src=${img}
                  alt=${name}
                />
                <h3>${name}</h3>
                <p>${rating}</p>
              </a>
            </li>
    `;
};

const bestBlogsListEl = document.querySelector('.aside-best-blogs-list');
const makeBestBlogsList = bestBlogs.map(createBestBlogsMarkup).join('');

bestBlogsListEl.insertAdjacentHTML('beforeend', makeBestBlogsList);
