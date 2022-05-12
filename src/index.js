import pageLoad from "./page-load";
import { toggleNavClass } from "./nav-bar";
import loadMenu from "./menu";
import loadContact from "./contact";
import loadHero from "./hero";

function initialize() {
  pageLoad();
  loadHero();

  const navBar = document.querySelector('#nav-bar')
  const navLinks = navBar.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', (() => loadTab(link.dataset.page)));
  })
}

function loadTab(tab) {
  const contentLeft = document.querySelector('#content-left');
  while(contentLeft.childElementCount > 1) {
    contentLeft.removeChild(contentLeft.lastChild);
  }
  toggleNavClass(tab);
  switch (tab) {
    default: 
    case 'home':
      loadHero();
      break;
    case 'menu':
      loadMenu();
      break;
    case 'contact':
      loadContact();
      break;
  }
}

// Event listeners
window.addEventListener('load', initialize);
