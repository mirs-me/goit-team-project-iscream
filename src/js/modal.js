const openModalBtn= document.querySelector("[data-modal-open]");
const closeModalBtn=document.querySelector("[data-modal-close]");
const modal= document.querySelector("[data-modal]");


const toggleModal = function(){
    modal.classList.toggle('is-hidden')
    }
    
openModalBtn.addEventListener('click',toggleModal)
closeModalBtn.addEventListener('click',toggleModal)

