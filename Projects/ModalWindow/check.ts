'use strict';

// Selecting the elements with types
const modal1 = document.querySelector<HTMLElement>('.modal');
const overlay1 = document.querySelector<HTMLElement>('.overlay');
const btnCloseModal1 =
  document.querySelector<HTMLButtonElement>('.close-modal');
const btnsOpenModal1 =
  document.querySelectorAll<HTMLButtonElement>('.show-modal');
