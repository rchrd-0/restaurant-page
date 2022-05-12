function loadNavBar() {
  const contentLeft = document.querySelector('#content-left');
  const navBarContainer = document.createElement('div');
  const childElements = new Array;
  navBarContainer.setAttribute('id', 'nav-bar');

  const goHome = document.createElement('a');
  goHome.setAttribute('href', '#');
  goHome.dataset.page = 'home';
  const logo = document.createElement('div');
  logo.setAttribute('id', 'logo');
  goHome.appendChild(logo);

  
  const list = document.createElement('ul');
  const links = ['Menu', 'Contact'];
  for (let i = 0; i < links.length; i++) {
    let item = document.createElement('li');
    let anchor = document.createElement('a');
    anchor.textContent = links[i];
    anchor.dataset.page = links[i].toLowerCase();
    anchor.setAttribute('href', '#');
    anchor.classList.add('sans-serif');
    item.appendChild(anchor);
    list.appendChild(item);
  }
  childElements.push(goHome, list);
  childElements.forEach(element => navBarContainer.appendChild(element));

  contentLeft.appendChild(navBarContainer);
}

function toggleNavClass(page) {
  const navBar = document.querySelector('ul');
  const links = navBar.querySelectorAll('a');

  links.forEach(link => {
    if (link.dataset.page === page) {
      link.classList.add('nav-bar-active');
    } else {
      link.classList.remove('nav-bar-active');
    }
  })

}

export {loadNavBar, toggleNavClass}