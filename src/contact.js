function loadContact() {
  const contentLeft = document.querySelector('#content-left');
  let contact = document.createElement('div');
  contact.setAttribute('id', 'contact');

  let ids = ['location', 'details', 'hours', 'links'];
  let cards = new Array;
  for (let i = 0; i < ids.length; i++) {
    const card = document.createElement('div');
    card.classList.add('contact-section');
    card.setAttribute('id', ids[i]);
    contact.appendChild(card);
    cards.push(card);
  }
  insertContent(cards);

  contentLeft.appendChild(contact);
}

function insertContent(sections) {
  for (let i = 0; i < sections.length; i++) {
    let header = document.createElement('h1');
    header.classList.add('contact-header');
    let childElements = new Array;

      switch (sections[i].id) {
        case 'location':
          const p = document.createElement('p');
          header.textContent = 'Location';
          p.textContent = '8th Floor, If Building, Else Street, Hong Kong';
          childElements.push(header, p);
          break;
        case 'details':
          header.textContent = 'Contact';
          childElements.push(header);
          const content = ['reservations@emailservice.com', '+852 8888 8888'];
          for (let i = 0; i < content.length; i++) {
            const p = document.createElement('p');
            p.textContent = content[i];
            childElements.push(p);
          }
          break;
        case 'hours':
          header.textContent = 'Hours';
          childElements.push(header);
          childElements = childElements.concat(insertOpeningHours());
          break;
        case 'links':
          insertLinks(sections[i]);
          break;
      }
      childElements.forEach(element => sections[i].appendChild(element));
  }
}

function insertOpeningHours() {
  const text = ['Lunch:', '12 - 3pm', 'Dinner:', '6 - 11pm'];
  let childElements = new Array;
  for (let i = 0; i < text.length; i++) {
    const p = document.createElement('p');
    p.textContent = text[i];
    if ([i] % 2 === 0) {
      p.classList.add('contact-subheader');
    }
    childElements.push(p);
  }
  
  return childElements;
}

function insertLinks(section) {
  const sectionRows = ['email', 'icons'];
  const icons = ['instagram', 'facebook', 'github'];
  sectionRows.forEach(row => {
    let div = document.createElement('div');
    div.classList.add('section-row');
    div.setAttribute('id', row);

    if (row === 'email') {
      let emailInput = document.createElement('input');
      emailInput.setAttribute('type', 'email');
      emailInput.setAttribute('placeholder', 'Email Address');
      let button = document.createElement('button');
      button.textContent = 'Sign Up';
      div.append(emailInput, button);
    } else {
      for (let i = 0; i < icons.length; i++) {
        let iconContainer = document.createElement('a');
        iconContainer.classList.add('contact-icon');
        iconContainer.dataset.icon = icons[i];

        if (icons[i] === 'github') {
          iconContainer.setAttribute('href', 'https://github.com/rchrd-0');
          iconContainer.setAttribute('target', '_blank');
        }

        div.appendChild(iconContainer);
      }
    }
    
    section.appendChild(div);
  });
}

export default loadContact;