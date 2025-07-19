import{a as f,S as m,i as n}from"./assets/vendor-rOMtvQ2t.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const g="51362308-fccd9ac64991a037e5dade233",h="https://pixabay.com/api/";async function y(a){return(await f.get(h,{params:{key:g,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),v=new m(".gallery a");function L(a){const t=a.map(({webformatURL:r,largeImageURL:i,tags:e,likes:s,views:o,comments:d,downloads:p})=>`
      <a class="gallery-item" href="${i}">
  <img src="${r}" alt="${e}" loading="lazy" />
  <div class="info">
    <div class="info-item">
      <span class="label">Likes</span>
      <span class="value">${s}</span>
    </div>
    <div class="info-item">
      <span class="label">Views</span>
      <span class="value">${o}</span>
    </div>
    <div class="info-item">
      <span class="label">Comments</span>
      <span class="value">${d}</span>
    </div>
    <div class="info-item">
      <span class="label">Downloads</span>
      <span class="value">${p}</span>
    </div>
  </div>
</a>
    `).join("");l.insertAdjacentHTML("beforeend",t),v.refresh()}function b(){l.innerHTML=""}function w(){u.classList.add("is-visible")}function x(){u.classList.remove("is-visible")}const c="/goit-js-hw-11/assets/sprite-BWBAyIsh.svg",$=document.querySelector(".form"),q=document.querySelector('input[name="search-text"]');$.addEventListener("submit",async a=>{a.preventDefault();const t=q.value.trim();if(!t){n.error({message:`
        <svg class="toast-icon" width="24" height="24">
          <use xlink:href="${c}#icon-error"></use>
        </svg>
        <span class="error-text">Please enter a search query!</span>
      `,dangerouslyHTML:!0,position:"topRight",timeout:3e3});return}b(),w();try{const r=await y(t);r.hits.length===0?n.warning({class:"custom-toast",icon:"",message:`
    <svg class="toast-icon" width="24" height="24">
      <use xlink:href="${c}#icon-error"></use>
    </svg>
    <span class="error-text">Sorry, there are no images matching your search query. Please try again!</span>
  `,dangerouslyHTML:!0,position:"topRight",timeout:3e3,close:!0}):L(r.hits)}catch{n.error({class:"custom-toast",icon:"",message:`
        <svg class="toast-icon" width="24" height="24">
          <use xlink:href="${c}#icon-error"></use>
        </svg>
        <span class="error-text">An error occurred. Please try again later.</span>
      `,dangerouslyHTML:!0,position:"topRight",timeout:3e3})}finally{x()}});
//# sourceMappingURL=index.js.map
