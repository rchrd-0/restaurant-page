function loadMenu() {
  const menu = document.createElement('div');
  menu.setAttribute('id', 'menu');
  const heading = document.createElement('h1');
  heading.textContent = 'Menu';
  menu.appendChild(heading);
  
  const menuSections = ['meat', 'seafood', 'salad', 'sides'];
  menuSections.forEach(section => {
    const container = document.createElement('div');
    container.classList.add('menu-section');
    container.dataset.menu = section;
    const sectionHeader = document.createElement('h2');
    sectionHeader.textContent = section.toUpperCase();
    container.appendChild(sectionHeader);
    menu.appendChild(container);
  })

  return menu;
}

function insertContent(section) {
  
}

export default loadMenu;