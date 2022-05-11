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

    let content = getContent(container);
    content.forEach(item => container.appendChild(item));
    
    menu.appendChild(container);
  })

  return menu;
}

function getContent(div) {
  const allContent = {
    meat: [
      'Hong Kong-style sand ginger chicken, house-made scallion sauce',
      'Lamb chops, laccha onion',
      'Roast duck, hoisin sauce, steamed pancakes',
      'Australian Wagyu skirt steak, thick-cut rice noodles, seaweed butter, preserved lemon'
    ],
    seafood: [
      'Tiger prawn noodles, soy butter sauce, prawn oil, dried shrimp roe',
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