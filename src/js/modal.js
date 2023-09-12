const openModalBtn = document.querySelectorAll('[data-modal-open]');
const closeModalBtn = document.querySelectorAll('[data-modal-close]');
const modalBackdrop = document.querySelectorAll('[data-modal-backdrop]');
let currentModal;

openModalBtn.forEach(btn => {
  btn.addEventListener('click', e => {
    const currentDataModal = e.target.dataset.modalOpen;
    currentModal = document.querySelector(`[data-modal=${currentDataModal}]`);
    console.log(currentModal);
    toggleModal();
  });
});

const toggleModal = function () {
  currentModal.classList.toggle('is-hidden');
  !currentModal.classList.contains('is-hidden')
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'visible');
};

closeModalBtn.forEach(btn => {
  btn.addEventListener('click', toggleModal);
});

modalBackdrop.forEach(backdrop => {
  backdrop.addEventListener('click', e =>
    e.target.hasAttribute('data-modal-backdrop') ? toggleModal() : null,
  );
});
