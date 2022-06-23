const body = document.querySelector('body');
const controls = document.querySelector('.buttons-container');
const cardsContainer = document.querySelector('.sound-effect');

export function toggleDarkMode(){

  body.classList.toggle("dark-mode");
  controls.classList.toggle("dark-mode");
  cardsContainer.classList.toggle("dark-mode");

};