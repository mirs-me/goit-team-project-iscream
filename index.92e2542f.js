(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),l=document.querySelector(".mobile-nav"),a=()=>{const o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open")};t.addEventListener("click",a),o.addEventListener("click",a),l.addEventListener("click",(e=>{"mobile-nav-link"===e.target.className&&a()})),window.matchMedia("(min-width: 768px)").addEventListener("change",(o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))}))})();const e=document.querySelectorAll("[data-modal-open]"),t=document.querySelectorAll("[data-modal-close]");document.querySelectorAll("[data-modal]");let o;e.forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.dataset.modalOpen;o=document.querySelector(`[data-modal=${t}]`),l()}))}));const l=function(){o.classList.toggle("is-hidden"),o.classList.contains("is-hidden")?document.body.style.overflow="visible":document.body.style.overflow="hidden"};t.forEach((e=>{e.addEventListener("click",l)}));new Swiper(".swiper",{direction:"horizontal",slidesPerView:1,spaceBetween:30,pagination:{el:".swiper-pagination",clickable:!0}});const a=document.querySelectorAll(".products-link"),c=document.querySelector("[data-modal=products]"),r=c.querySelector(".product-modal-image"),d=document.querySelectorAll(".product-modal-stats-item"),n=document.querySelectorAll(".product-modal-stats-item-value");a.forEach((e=>{e.addEventListener("click",(e=>{if("ice-cream-btn"===e.target.id){c.querySelector(".product-modal-title").textContent="Chocolate icecream",r.className="product-modal-image";for(let e=0;e<d.length;e++)d[e].style.borderColor="#aec6a5",n[e].style.backgroundColor="#aec6a5"}if("ice-coffe-btn"===e.target.id){c.querySelector(".product-modal-title").textContent="Ice Coffee",r.className="product-modal-image-coffee";for(let e=0;e<d.length;e++)d[e].style.borderColor="#efd478",n[e].style.backgroundColor="#efd478"}if("ice-milkshake-btn"===e.target.id){c.querySelector(".product-modal-title").textContent="Milkshakes",r.className="product-modal-image-milkshakes",console.log(c);for(let e=0;e<d.length;e++)d[e].style.borderColor="#d6936d",n[e].style.backgroundColor="#d6936d"}}))}));
//# sourceMappingURL=index.92e2542f.js.map
