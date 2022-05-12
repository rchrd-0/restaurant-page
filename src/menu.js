function loadMenu() {
  const contentLeft = document.querySelector('#content-left');
  const menu = document.createElement('div');
  menu.setAttribute('id', 'menu');
  const heading = document.createElement('h1');
  heading.textContent = 'Menu';
  menu.appendChild(heading);
  
  const menuSections = ['meat', 'seafood', 'salad', 'sides'];
  for (let i = 0; i < menuSections.length; i++) {
    const container = document.createElement('div');
    container.classList.add('menu-section');
    container.dataset.menu = menuSections[i];
    const sectionHeader = document.createElement('h2');
    let textColor = (i % 2 === 0) ? 'text-primary-1' : 'text-primary-2';
    sectionHeader.classList.add(textColor);
    sectionHeader.textContent = menuSections[i].toUpperCase();
    container.appendChild(sectionHeader);
    let content = getContent(container);
    content.forEach(item => container.appendChild(item));
    menu.appendChild(container);

  }
  contentLeft.appendChild(menu);
}

function getContent(div) {
  const allContent = {
    meat: [
      'Hong Kong-style sand ginger chicken, house-made scallion sauce',
      'Lamb shank, laccha onion',
      'Roast duck, hoisin sauce, steamed pancakes',
      'Australian Wagyu sirloin, rice noodles, seaweed butter, salty lime'
    ],
    seafood: [
      'Tiger prawn noodles, miso butter sauce, dried shrimp roe',
      'Eel on crispy sushi rice & pickles',
      'Cobia, sapphire chutney, lime caviar',
      'Grilled lobster, green mango, pineapple & lime vinaigrette'
    ],
    salad: [
      'Shredded Mushrooms, cold noodles, cucumber, chilli oil, sesame dressing',
      'Shredded chicken salad, cabbage, rau ram, prawn chips, pickles',
      'Pork belly, pickles, sichuan peppercorn oil'
    ],
    sides: [
      'Chicken wings, lemongrass, red chilli, salt, pepper',
      'Crispy eggplant, mixed herbs, ginger glaze',
      'Shrimp tacos, lime garlic cabbage, mango salsa, cilantro, onions'
    ]
  }
  const keys = Object.keys(allContent);
  let section = keys.filter(key => key === div.dataset.menu).pop();

  let pArray = new Array;
  allContent[section].forEach(item => {
    const p = document.createElement('p');
    p.textContent = item;
    pArray.push(p);
  })
  
  return pArray;
}

export default loadMenu;