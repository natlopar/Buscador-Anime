const g=document.querySelector(".js-input"),C=document.querySelector(".js-btnSearch"),m=document.querySelector(".js-containerFav"),f=document.querySelector(".js-containerRes"),L=document.querySelector(".js-removeFav"),j=document.querySelector(".js-reset");let l="",a=[],i=[];function I(e){e.preventDefault();const t=g.value.toLowerCase();fetch(`https://api.jikan.moe/v4/anime?q=${t}`).then(n=>n.json()).then(n=>{a=n.data,r(a,f)})}function r(e,t){t.innerHTML="";const n=JSON.parse(localStorage.getItem("series"));for(const s of e){const S=document.createTextNode(s.title);let o=s.images.jpg.image_url;o==="https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"&&(o="https://placehold.co/210x295?text=NoImageFound");const d=document.createElement("li"),c=document.createElement("article"),u=document.createElement("img"),v=document.createElement("h3"),p=document.createElement("i");if(c.appendChild(p),p.setAttribute("class","fa-solid fa-circle-xmark js-btnRemove card__btn"),u.setAttribute("src",o),u.setAttribute("class","card__img"),u.setAttribute("alt","imagen anime"),c.appendChild(u),t.appendChild(d),d.setAttribute("class","list"),d.appendChild(c),v.setAttribute("class","card__title"),v.appendChild(S),c.setAttribute("id",s.mal_id),c.setAttribute("class","js-article card"),c.appendChild(v),t===f){if(d.classList.add("js-liResult"),c.removeChild(p),n)for(const R of n)parseInt(c.id)===R.mal_id&&c.classList.add("favorite");t.appendChild(d)}y(),A()}}function A(){const e=document.querySelectorAll(".js-btnRemove");for(const t of e)t.addEventListener("click",F)}function y(){const e=document.querySelectorAll(".js-article");for(const t of e)t.addEventListener("click",k)}function k(e){l=e.currentTarget,l.classList.contains("favorite")?E():_()}function E(e){l.classList.remove("favorite");const t=l.id;h(t)}function _(e){if(l.parentElement.classList.contains("js-liResult")){l.classList.add("favorite");const n=l.id,s=a.find(o=>parseInt(n)===o.mal_id);i.findIndex(o=>o.mal_id===parseInt(n))===-1&&i.push(s)}r(i,m),localStorage.setItem("series",JSON.stringify(i))}function F(e){const n=e.currentTarget.parentElement,s=n.id;h(s),q(n)}function q(e){const t=document.querySelectorAll(".js-article");for(const n of t){const s=n.id;e.id===s&&n.classList.remove("favorite")}}function h(e){const t=i.findIndex(n=>n.mal_id===parseInt(e));i.splice(t,1),localStorage.setItem("series",JSON.stringify(i)),r(i,m)}C.addEventListener("click",I);function x(){const e=JSON.parse(localStorage.getItem("series"));e&&(i=e,r(i,m))}x();function b(){i=[],localStorage.setItem("series",JSON.stringify(i)),r(i,m),r(a,f)}L.addEventListener("click",b);function N(e){e.preventDefault(),b(),a=[],g.value="",r(a,f)}j.addEventListener("click",N);
//# sourceMappingURL=main.js.map
