function loadNavBar() {
  const contentLeft = document.querySelector('#content-left');
  const navBar = document.createElement('div');
  const childElements = new Array;
  navBar.classList.add('nav-bar');

  const goHome = document.createElement('a');
  goHome.setAttribute('href', '#');
  goHome.dataset.page = 'home';
  const logo = document.createElement('div');
  logo.setAttribute('id', 'logo-placeholder');
  goHome.appendChild(logo);

  
  const list = document.createElement('ul');
  const links = ['Menu', 'Contact'];
  for (let i = 0; i < links.length; i++) {
    let item = document.createElement('li');
    let anchor = document.createElement('a');
    anchor.textContent = links[i];
    anchor.dataset.page = links[i].toLowerCase();
    anchor.setAttribute('href', '#');
    item.appendChild(anchor);
    list.appendChild(item);
  }
  childElements.push(goHome, list);
  childElements.forEach(element => navBar.appendChild(element));

  contentLeft.appendChild(navBar);
}

export default loadNavBar;