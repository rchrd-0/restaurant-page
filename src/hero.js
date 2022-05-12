function loadHero() {
  const contentLeft = document.querySelector('#content-left');
  const hero = document.createElement('div');
  hero.setAttribute('id', 'hero');

  const heroSplash = document.createElement('div');
  heroSplash.setAttribute('id', 'hero-splash');
  heroSplash.append(loadHeaders());
  const text = document.createElement('p');
  text.classList.add('serif');
  text.setAttribute('id', 'hero-desc');
  text.textContent = `If; else is an entirely made up restaurant. Inspired by
    street food, cozy interiors, ES6 modules, penguins and the need to pad this message out.`
  hero.appendChild(heroSplash);
  hero.appendChild(text);

  contentLeft.appendChild(hero);
}

const loadHeaders = () => {
  const container = document.createElement('div');
  container.classList.add('header-container');
  const lines = ['Hypothetical restaurant;', 'nonsense menu;', 'good vibes all round;'];
  for (let i = 0; i < lines.length; i++) {
    const title = document.createElement('h1');
    title.classList.add('hero-header', 'sans-serif');
    if (i === 0) {
      title.classList.add('primary-1');
    } else if (i === 1) {
      title.classList.add('primary-2');
    }
    title.textContent = lines[i];
    container.append(title);
  }

  return container;
}

export default loadHero;