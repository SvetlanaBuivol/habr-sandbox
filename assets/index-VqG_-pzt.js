(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();const i=document.querySelector(".header-dropdown-button"),r=document.querySelector(".dropdown-content");i.addEventListener("click",f);function f(){r.style.display=r.style.display==="block"?"none":"block",i.classList.toggle("rotated"),r.style.display==="block"?document.addEventListener("click",d):document.removeEventListener("click",d)}function d(e){!i.contains(e.target)&&!r.contains(e.target)&&(r.style.display="none",i.classList.remove("rotated"),document.removeEventListener("click",d))}const b=document.querySelector(".my-feed-setting-button");b.addEventListener("click",h);function h(){document.querySelector(".my-feed-menu").classList.toggle("active"),document.querySelector(".icon-my-feed-settings").classList.toggle("rotated")}const y=document.querySelector(".sticky-header-settings-button"),w=document.querySelector(".footer-lang-button"),l=document.querySelector(".settings-modal"),v=document.querySelector(".setting-modal-close-button");y.addEventListener("click",m);w.addEventListener("click",m);function m(){l.style.display="block",window.addEventListener("keydown",p),v.addEventListener("click",g),l.addEventListener("click",L)}function g(){l.style.display="none",window.removeEventListener("keydown",p)}function L(e){e.target===e.currentTarget&&g()}function p(e){e.code==="Escape"&&g()}const k=[{img:"https://habrastorage.org/getpro/habr/company/a8a/d05/1a5/a8ad051a528365eeade6c64624231202.png",name:"RUVDS.com",rating:3205.16},{img:"https://habrastorage.org/getpro/habr/company/41b/7dd/fba/41b7ddfba1808f6fef6f498d4928024d.png",name:"Timeweb Cloud",rating:1445.02},{img:"https://habrastorage.org/getpro/habr/company/e9c/ba5/370/e9cba53709ce48cceecee1ffe5925b17.png",name:"Selectel",rating:1351.75},{img:"https://habrastorage.org/getpro/habr/company/70c/a67/cc7/70ca67cc7ecfa889ded9b51efa3e70d3.png",name:"MTC",rating:972.73},{img:"https://habrastorage.org/getpro/habr/company/9ed/c74/6b4/9edc746b484c805ecad1f941b5f7068a.png",name:"VK",rating:882.26},{img:"https://habrastorage.org/getpro/habr/company/7e4/7b8/e31/7e47b8e31d0efe9f398461278a16a357.png",name:"Хабр",rating:680.47},{img:"https://habrastorage.org/getpro/habr/company/9db/3c1/ec0/9db3c1ec02265b8bcbfdfb0d23d8b9f2.jpg",name:"Сбер",rating:668.97},{img:"https://habrastorage.org/getpro/habr/company/2d5/0ed/b57/2d50edb57cf45fa07cc4f39f53b78395.png",name:"OTUS",rating:621.01},{img:"https://habrastorage.org/getpro/habr/company/3a5/515/806/3a5515806f33cd7076d16cd91c9bc9e3.png",name:"FirstVDS",rating:505.95},{img:"https://habrastorage.org/getpro/habr/company/264/1ae/cdd/2641aecdd0c173926fae531b2f73e913.png",name:"ГК ЛАНИТ",rating:421.29}],E=({img:e,name:o,rating:s})=>`
      <li class="aside-best-blogs-item">
              <a href="#" class="aside-best-blogs-link">
                <img
                  src=${e}
                  alt=${o}
                />
                <h3>${o}</h3>
                <p>${s}</p>
              </a>
            </li>
    `,S=document.querySelector(".aside-best-blogs-list"),C=k.map(E).join("");S.insertAdjacentHTML("beforeend",C);const B=[{title:"Как я случайно сэкономил компании полмиллиона долларов",views:73e3,comments:15,newComments:3},{title:"Press F. Что из мира IT мы потеряли в 2023 году",views:9700,comments:65,newComments:18},{title:"Эксперт показал концепцию GUI современной версии Windows XP, если бы она вышла вместо Windows 11",views:45e3,comments:105,newComments:105},{title:"Как я с 0 поднял свой уровень английского до B2 и подтвердил этот уровень на экзамене IELTS Academic",views:8900,comments:58,newComments:82},{title:"Для Героев III вышло долгожданное полномасштабное обновление — Фабрика. Почему это по-настоящему уникальное явление?",views:38e3,comments:167,newComments:108},{title:"Во что играет Дед Мороз? Тест-подборка новогодних игр",views:38e3,comments:167,newComments:108,label:"Турбо"}],M=e=>e>=1e3?`${(e/1e3).toFixed(1).replace(".0","")}K`:e.toString(),q=(e,o)=>{const{title:s,views:c,comments:t,newComments:n,label:a}=e,u=M(c);if(o<5)return`
        <li class="aside-reading-now-item">
              <a href="#" class="aside-reading-now-link">${s}</a>
              <div class="aside-reading-now-info">
                <svg class="icon-views" width="24" height="24">
                  <title>Количество просмотров</title>
                  <use xlink:href="./assets/svg/svg-defs.svg#icon-views"></use>
                </svg>
                <p>${u}</p>
                <a href="#" class="aside-reading-now-comments-link">
                  <svg class="icon-chat" width="16" height="16">
                    <title>Комментарии</title>
                    <use xlink:href="./assets/svg/svg-defs.svg#icon-chat"></use>
                  </svg>
                  <p>${t}</p>
                  <p>+${n}</p>
                </a>
              </div>
            </li>
        `;if(o===5)return`
         <li class="aside-reading-now-item">
              <a href="#" class="aside-reading-now-link">${s}</a>
              <div class="aside-reading-now-label">${a}</div>
            </li>
        `},O=document.querySelector(".aside-reading-now-list"),$=B.map((e,o)=>q(e,o)).join("");O.insertAdjacentHTML("beforeend",$);
