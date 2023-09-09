const openModalBtn= document.querySelectorAll("[data-modal-open]");
const closeModalBtn=document.querySelector("[data-modal-close]");
const modal= document.querySelectorAll("[data-modal]");
let currentModal


openModalBtn.forEach(btn => {
    btn.addEventListener('click', (e)=>{
       const currentDataModal = e.target.dataset.modalOpen
        currentModal = document.querySelector(`[data-modal=${currentDataModal}]`)
        toggleModal()

    })
});

const toggleModal = function(){
    currentModal.classList.toggle('is-hidden')
    !currentModal.classList.contains('is-hidden') ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible';
    }

closeModalBtn.addEventListener('click', toggleModal)








