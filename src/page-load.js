import { loadNavBar } from "./nav-bar";

function pageLoad() {
  const main = document.querySelector('#content');
  const content = new Array;

  const contentLeft = document.createElement('div');
  contentLeft.setAttribute('id', 'content-left');
  content.push(contentLeft);

  const contentRight = document.createElement('div');
  contentRight.setAttribute('id', 'content-right');
  content.push(contentRight);

  content.forEach(element => main.appendChild(element));
  loadNavBar();
}

export default pageLoad;
