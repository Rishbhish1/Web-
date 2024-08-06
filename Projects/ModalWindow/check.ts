'use strict';

// Selecting the elements with types
const modal1 = document.querySelector<HTMLElement>('.modal');
const overlay1 = document.querySelector<HTMLElement>('.overlay');
const btnCloseModal1 =
  document.querySelector<HTMLButtonElement>('.close-modal');
const btnsOpenModal1 =
  document.querySelectorAll<HTMLButtonElement>('.show-modal');

// Function to open the modal
const openModal1 = function () {
  if (modal) modal.classList.remove('hidden');
  if (overlay) overlay.classList.remove('hidden');
};

// Function to close the modal
const closeModal1 = function () {
  if (modal) modal.classList.add('hidden');
  if (overlay) overlay.classList.add('hidden');
};

// Adding event listeners to buttons that open the modal
btnsOpenModal.forEach(button => button.addEventListener('click', openModal));

// Adding event listeners to close the modal
if (btnCloseModal) btnCloseModal.addEventListener('click', closeModal);
if (overlay) overlay.addEventListener('click', closeModal);

// Adding event listener for keyboard escape key
document.addEventListener('keydown', function (event: KeyboardEvent) {
  if (event.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
