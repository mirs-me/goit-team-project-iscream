(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),l=document.querySelector(".mobile-nav"),a=()=>{const o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open")};t.addEventListener("click",a),o.addEventListener("click",a),l.addEventListener("click",(e=>{"mobile-nav-link"===e.target.className&&a()})),window.matchMedia("(min-width: 768px)").addEventListener("change",(o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))}))})();const e=document.querySelectorAll("[data-modal-open]"),t=document.querySelectorAll("[data-modal-close]");document.querySelectorAll("[data-modal]");let o;e.forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.dataset.modalOpen;o=document.querySelector(`[data-modal=${t}]`),l()}))}));const l=function(){o.classList.toggle("is-hidden"),o.classList.contains("is-hidden")?document.body.style.overflow="visible":document.body.style.overflow="hidden"};t.forEach((e=>{e.addEventListener("click",l)}));new Swiper(".swiper",{direction:"horizontal",loop:!0,autoplay:{delay:5e3},slidesPerView:1,spaceBetween:30,pagination:{el:".swiper-pagination",clickable:!0}});const a=document.querySelectorAll(".products-link"),r=document.querySelector("[data-modal=products]"),d=r.querySelector(".product-modal-image"),c=document.querySelectorAll(".product-modal-stats-item"),n=document.querySelectorAll(".product-modal-stats-item-value");a.forEach((e=>{e.addEventListener("click",(e=>{if("ice-cream-btn"===e.target.id){r.querySelector(".product-modal-title").textContent="Chocolate icecream",d.className="product-modal-image";for(let e=0;e<c.length;e++)c[e].style.borderColor="#aec6a5",n[e].style.backgroundColor="#aec6a5",n[e].style.boxShadow="0px 6px 20px rgba(10, 136, 23, 0.25)"}if("ice-coffe-btn"===e.target.id){r.querySelector(".product-modal-title").textContent="Ice Coffee",d.className="product-modal-image-coffee";for(let e=0;e<c.length;e++)c[e].style.borderColor="#efd478",n[e].style.backgroundColor="#efd478",n[e].style.boxShadow="0px 6px 20px var(--yellow-underlay)"}if("ice-milkshake-btn"===e.target.id){r.querySelector(".product-modal-title").textContent="Milkshakes",d.className="product-modal-image-milkshakes",console.log(r);for(let e=0;e<c.length;e++)c[e].style.borderColor="#d6936d",n[e].style.backgroundColor="#d6936d",n[e].style.boxShadow="0px 6px 20px var(--brown-underlay)"}}))}));
//# sourceMappingURL=index.ba220889.js.map