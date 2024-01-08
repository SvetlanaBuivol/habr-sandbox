(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const a=document.querySelector(".header-dropdown-button"),d=document.querySelector(".dropdown-content");a.addEventListener("click",E);function E(){const e=d.classList.toggle("show-dropdown");a.classList.toggle("rotated",e),e?(window.addEventListener("click",g),window.addEventListener("keydown",f)):p()}function g(e){!a.contains(e.target)&&!d.contains(e.target)&&m()}function m(){d.classList.remove("show-dropdown"),a.classList.remove("rotated"),p()}function f(e){e.code==="Escape"&&m()}function p(){window.removeEventListener("click",g),window.removeEventListener("keydown",f)}const k=document.querySelector(".my-feed-setting-button"),u=document.querySelector(".my-feed-menu"),b=document.querySelector(".icon-my-feed-settings");k.addEventListener("click",S);function S(){const e=u.classList.toggle("active");b.classList.toggle("rotated"),e?window.addEventListener("keydown",h):w()}function w(){u.classList.remove("active"),b.classList.remove("rotated"),window.removeEventListener("keydown",h)}function h(e){e.code==="Escape"&&w()}const M=document.querySelector(".sticky-header-settings-button"),C=document.querySelector(".footer-lang-button"),c=document.querySelector(".settings-modal"),B=document.querySelector(".setting-modal-close-button");M.addEventListener("click",y);C.addEventListener("click",y);function y(){c.style.display="block",window.addEventListener("keydown",v),B.addEventListener("click",l),c.addEventListener("click",q)}function l(){c.style.display="none",window.removeEventListener("keydown",v)}function q(e){e.target===e.currentTarget&&l()}function v(e){e.code==="Escape"&&l()}const $=[{img:"https://habrastorage.org/getpro/habr/company/a8a/d05/1a5/a8ad051a528365eeade6c64624231202.png",name:"RUVDS.com",rating:3205.16},{img:"https://habrastorage.org/getpro/habr/company/41b/7dd/fba/41b7ddfba1808f6fef6f498d4928024d.png",name:"Timeweb Cloud",rating:1445.02},{img:"https://habrastorage.org/getpro/habr/company/e9c/ba5/370/e9cba53709ce48cceecee1ffe5925b17.png",name:"Selectel",rating:1351.75},{img:"https://habrastorage.org/getpro/habr/company/70c/a67/cc7/70ca67cc7ecfa889ded9b51efa3e70d3.png",name:"MTC",rating:972.73},{img:"https://habrastorage.org/getpro/habr/company/9ed/c74/6b4/9edc746b484c805ecad1f941b5f7068a.png",name:"VK",rating:882.26},{img:"https://habrastorage.org/getpro/habr/company/7e4/7b8/e31/7e47b8e31d0efe9f398461278a16a357.png",name:"Хабр",rating:680.47},{img:"https://habrastorage.org/getpro/habr/company/9db/3c1/ec0/9db3c1ec02265b8bcbfdfb0d23d8b9f2.jpg",name:"Сбер",rating:668.97},{img:"https://habrastorage.org/getpro/habr/company/2d5/0ed/b57/2d50edb57cf45fa07cc4f39f53b78395.png",name:"OTUS",rating:621.01},{img:"https://habrastorage.org/getpro/habr/company/3a5/515/806/3a5515806f33cd7076d16cd91c9bc9e3.png",name:"FirstVDS",rating:505.95},{img:"https://habrastorage.org/getpro/habr/company/264/1ae/cdd/2641aecdd0c173926fae531b2f73e913.png",name:"ГК ЛАНИТ",rating:421.29}],O=({img:e,name:n,rating:s})=>`
      <li class="aside-best-blogs-item">
              <a href="#" class="aside-best-blogs-link">
                <img
                  src=${e}
                  alt=${n}
                />
                <h3>${n}</h3>
                <p>${s}</p>
              </a>
            </li>
    `,T=document.querySelector(".aside-best-blogs-list"),N=$.map(O).join("");T.insertAdjacentHTML("beforeend",N);const I=[{title:"Как я случайно сэкономил компании полмиллиона долларов",views:73e3,comments:15,newComments:3},{title:"Press F. Что из мира IT мы потеряли в 2023 году",views:9700,comments:65,newComments:18},{title:"Эксперт показал концепцию GUI современной версии Windows XP, если бы она вышла вместо Windows 11",views:45e3,comments:105,newComments:105},{title:"Как я с 0 поднял свой уровень английского до B2 и подтвердил этот уровень на экзамене IELTS Academic",views:8900,comments:58,newComments:82},{title:"Для Героев III вышло долгожданное полномасштабное обновление — Фабрика. Почему это по-настоящему уникальное явление?",views:38e3,comments:167,newComments:108},{title:"Во что играет Дед Мороз? Тест-подборка новогодних игр",views:38e3,comments:167,newComments:108,label:"Турбо"}],F=e=>e>=1e3?`${(e/1e3).toFixed(1).replace(".0","")}K`:e.toString(),D=(e,n)=>{const{title:s,views:i,comments:t,newComments:o,label:r}=e,L=F(i);if(n<5)return`
        <li class="aside-reading-now-item">
              <a href="#" class="aside-reading-now-link">${s}</a>
              <div class="aside-reading-now-info">
                <svg class="icon-views" width="24" height="24">
                  <title>Количество просмотров</title>
                  <use xlink:href="./assets/svg/svg-defs.svg#icon-views"></use>
                </svg>
                <p>${L}</p>
                <a href="#" class="aside-reading-now-comments-link">
                  <svg class="icon-chat" width="16" height="16">
                    <title>Комментарии</title>
                    <use xlink:href="./assets/svg/svg-defs.svg#icon-chat"></use>
                  </svg>
                  <p>${t}</p>
                  <p>+${o}</p>
                </a>
              </div>
            </li>
        `;if(n===5)return`
         <li class="aside-reading-now-item">
              <a href="#" class="aside-reading-now-link">${s}</a>
              <div class="aside-reading-now-label">${r}</div>
            </li>
        `},P=document.querySelector(".aside-reading-now-list"),V=I.map((e,n)=>D(e,n)).join("");P.insertAdjacentHTML("beforeend",V);
