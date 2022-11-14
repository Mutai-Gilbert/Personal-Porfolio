const menu = document.querySelector('.menu-icon');
const ul = document.querySelector('.nav-menu');
let currentState = false;

function toggleMenu() {
  if (currentState) {
    ul.classList.add('df');
  } else {
    ul.classList.remove('df');
  }
  currentState = !currentState;
}

menu.addEventListener('click', toggleMenu);