const productBtn = document.querySelectorAll('.products-link');
const productModal = document.querySelector('[data-modal=products]');
const modalImage = productModal.querySelector('.product-modal-image');
const productsListItem = document.querySelectorAll('.product-modal-stats-item');
const productsListItemValue = document.querySelectorAll('.product-modal-stats-item-value');

productBtn.forEach(btn => {
    btn.addEventListener('click', (e)=>{

        if(e.target.id === 'ice-cream-btn') {
            productModal.querySelector('.product-modal-title').textContent = 'Chocolate icecream';
            modalImage.className = 'product-modal-image';
      
            for (let i = 0; i < productsListItem.length; i++) {
              productsListItem[i].style.borderColor = '#aec6a5';
              productsListItemValue[i].style.backgroundColor = '#aec6a5';
              productsListItemValue[i].style.boxShadow = '0px 6px 20px rgba(10, 136, 23, 0.25)'
            }
          }
       
        if(e.target.id === 'ice-coffe-btn') {
            productModal.querySelector('.product-modal-title').textContent = 'Ice Coffee';
            modalImage.className = 'product-modal-image-coffee';
      
            for (let i = 0; i < productsListItem.length; i++) {
              productsListItem[i].style.borderColor = '#efd478';
              productsListItemValue[i].style.backgroundColor = '#efd478';
              productsListItemValue[i].style.boxShadow = `0px 6px 20px var(--yellow-underlay)`;
            }
          }
          if(e.target.id === 'ice-milkshake-btn') {
            productModal.querySelector('.product-modal-title').textContent = 'Milkshakes';
            modalImage.className = 'product-modal-image-milkshakes';
            console.log(productModal)
      
            for (let i = 0; i < productsListItem.length; i++) {
              productsListItem[i].style.borderColor = '#d6936d';
              productsListItemValue[i].style.backgroundColor = '#d6936d';
              productsListItemValue[i].style.boxShadow = `0px 6px 20px var(--brown-underlay)`;
            
            }
          }
          })});
