function loadNavBar() {
  const navBar = document.createElement('div');
  const childElements = new Array;
  navBar.classList.add('nav-bar');

  const logo = document.createElement('div');
  logo.setAttribute('id', 'logo-placeholder');

  const list = document.createElement('ul');
  const links = ['About', 'Menu', 'Contact'];
  for (let i = 0; i < links.length; i++) {
    let item = document.createElement('li');
    let anchor = document.createElement('a');
    anchor.textContent = links[i];
    anchor.setAttribute('href', '#');
    item.appendChild(anchor);
    list.appendChild(item);
  }
  childElements.push(logo, list);
  childElements.forEach(element => navBar.appendChild(element));

  return navBar;
}

export default loadNavBar;