import loadHero from "./hero";
import loadNavBar from "./nav-bar";

const pageLoad = () => {
  const main = document.querySelector('#content');
  const content = new Array;

  const contentLeft = document.createElement('div');
  contentLeft.setAttribute('id', 'content-left');
  contentLeft.appendChild(loadNavBar());
  contentLeft.appendChild(loadHero());
  content.push(contentLeft);

  const contentRight = document.createElement('div');
  contentRight.setAttribute('id', 'content-right');
  content.push(contentRight);

  content.forEach(element => main.appendChild(element));
}

export default pageLoad;