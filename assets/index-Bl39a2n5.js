(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();const c=document.querySelector(".header-dropdown-button"),a=document.querySelector(".dropdown-content");c.addEventListener("click",b);function b(){a.style.display=a.style.display==="block"?"none":"block",c.classList.toggle("rotated"),a.style.display==="block"?document.addEventListener("click",d):document.removeEventListener("click",d)}function d(t){!c.contains(t.target)&&!a.contains(t.target)&&(a.style.display="none",c.classList.remove("rotated"),document.removeEventListener("click",d))}const h=document.querySelector(".my-feed-setting-button");function y(){document.querySelector(".my-feed-menu").classList.toggle("active"),document.querySelector(".icon-my-feed-settings").classList.toggle("rotated")}h.addEventListener("click",y);const w=document.querySelector(".sticky-header-settings-button"),v=document.querySelector(".footer-lang-button"),l=document.querySelector(".settings-modal"),m=document.querySelector(".setting-modal-close-button");w.addEventListener("click",p);v.addEventListener("click",p);function p(){l.style.display="block",m.addEventListener("click",g),window.addEventListener("click",u)}function g(){l.style.display="none",m.removeEventListener("click",g),window.removeEventListener("click",u)}function u(t){t.target===l&&g()}const L=[{img:"https://habrastorage.org/getpro/habr/company/a8a/d05/1a5/a8ad051a528365eeade6c64624231202.png",name:"RUVDS.com",rating:3205.16},{img:"https://habrastorage.org/getpro/habr/company/41b/7dd/fba/41b7ddfba1808f6fef6f498d4928024d.png",name:"Timeweb Cloud",rating:1445.02},{img:"https://habrastorage.org/getpro/habr/company/e9c/ba5/370/e9cba53709ce48cceecee1ffe5925b17.png",name:"Selectel",rating:1351.75},{img:"https://habrastorage.org/getpro/habr/company/70c/a67/cc7/70ca67cc7ecfa889ded9b51efa3e70d3.png",name:"MTC",rating:972.73},{img:"https://habrastorage.org/getpro/habr/company/9ed/c74/6b4/9edc746b484c805ecad1f941b5f7068a.png",name:"VK",rating:882.26},{img:"https://habrastorage.org/getpro/habr/company/7e4/7b8/e31/7e47b8e31d0efe9f398461278a16a357.png",name:"Хабр",rating:680.47},{img:"https://habrastorage.org/getpro/habr/company/9db/3c1/ec0/9db3c1ec02265b8bcbfdfb0d23d8b9f2.jpg",name:"Сбер",rating:668.97},{img:"https://habrastorage.org/getpro/habr/company/2d5/0ed/b57/2d50edb57cf45fa07cc4f39f53b78395.png",name:"OTUS",rating:621.01},{img:"https://habrastorage.org/getpro/habr/company/3a5/515/806/3a5515806f33cd7076d16cd91c9bc9e3.png",name:"FirstVDS",rating:505.95},{img:"https://habrastorage.org/getpro/habr/company/264/1ae/cdd/2641aecdd0c173926fae531b2f73e913.png",name:"ГК ЛАНИТ",rating:421.29}],k=({img:t,name:o,rating:s})=>`
      <li class="aside-best-blogs-item">
              <a href="#" class="aside-best-blogs-link">
                <img
                  src=${t}
                  alt=${o}
                />
                <h3>${o}</h3>
                <p>${s}</p>
              </a>
            </li>
    `,E=document.querySelector(".aside-best-blogs-list"),S=L.map(k).join("");E.insertAdjacentHTML("beforeend",S);const M=[{title:"Как я случайно сэкономил компании полмиллиона долларов",views:73e3,comments:15,newComments:3},{title:"Press F. Что из мира IT мы потеряли в 2023 году",views:9700,comments:65,newComments:18},{title:"Эксперт показал концепцию GUI современной версии Windows XP, если бы она вышла вместо Windows 11",views:45e3,comments:105,newComments:105},{title:"Как я с 0 поднял свой уровень английского до B2 и подтвердил этот уровень на экзамене IELTS Academic",views:8900,comments:58,newComments:82},{title:"Для Героев III вышло долгожданное полномасштабное обновление — Фабрика. Почему это по-настоящему уникальное явление?",views:38e3,comments:167,newComments:108},{title:"Во что играет Дед Мороз? Тест-подборка новогодних игр",views:38e3,comments:167,newComments:108,label:"Турбо"}],q=t=>t>=1e3?`${(t/1e3).toFixed(1).replace(".0","")}K`:t.toString(),B=(t,o)=>{const{title:s,views:i,comments:e,newComments:n,label:r}=t,f=q(i);if(o<5)return`
        <li class="aside-reading-now-item">
              <a href="#" class="aside-reading-now-link">${s}</a>
              <div class="aside-reading-now-info">
                <svg class="icon-views" width="24" height="24">
                  <title>Количество просмотров</title>
                  <use xlink:href="./assets/svg/svg-defs.svg#icon-views"></use>
                </svg>
                <p>${f}</p>
                <a href="#" class="aside-reading-now-comments-link">
                  <svg class="icon-chat" width="16" height="16">
                    <title>Комментарии</title>
                    <use xlink:href="./assets/svg/svg-defs.svg#icon-chat"></use>
                  </svg>
                  <p>${e}</p>
                  <p>+${n}</p>
                </a>
              </div>
            </li>
        `;if(o===5)return`
         <li class="aside-reading-now-item">
              <a href="#" class="aside-reading-now-link">${s}</a>
              <div class="aside-reading-now-label">${r}</div>
            </li>
        `},C=document.querySelector(".aside-reading-now-list"),$=M.map((t,o)=>B(t,o)).join("");C.insertAdjacentHTML("beforeend",$);
