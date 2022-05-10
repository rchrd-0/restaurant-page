function loadContact() {
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

  return contact;
}

function insertContent(sections) {
  for (let i = 0; i < sections.length; i++) {
    let header = document.createElement('h1');
    header.classList.add('contact-header');
    let childElements = new Array;

      switch (sections[i].id) {
        case 'location':
          const span = document.createElement('span');
          header.textContent = 'Location';
          span.textContent = '8th Floor, If Building, Else Street, Hong Kong';
          childElements.push(header, span);
          break;
        case 'details':
          header.textContent = 'Contact';
          childElements.push(header);
          const content = ['reservations@emailservice.com', '+852 8888 8888'];
          for (let i = 0; i < content.length; i++) {
            const span = document.createElement('span');
            span.textContent = content[i];
            childElements.push(span);
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
    const span = document.createElement('span');
    span.textContent = text[i];
    if ([i] % 2 === 0) {
      span.classList.add('contact-subheader');
    }
    childElements.push(span);
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
      icons.forEach(icon => {
        let iconContainer = document.createElement('div');
        iconContainer.classList.add('contact-icon');
        iconContainer.dataset.icon = icon;
        div.appendChild(iconContainer);
      })
    }
    section.appendChild(div);
  });
}

export default loadContact;