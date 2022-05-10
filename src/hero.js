function loadHero() {
  const hero = document.createElement('div');
  hero.setAttribute('id', 'hero');

  const heroImage = document.createElement('img');
  heroImage.setAttribute('id', 'hero-image-placeholder');
  const title = document.createElement('h1');
  const text = document.createElement('p');
  title.textContent = 'Lorem ipsum dolor sit amet.';
  text.textContent = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Corrupti, reiciendis magni inventore nesciunt unde tempora debitis adipisci 
    quasi dolorem deleniti amet numquam. Temporibus quod rem nulla repudiandae 
    blanditiis dolorem explicabo natus pariatur ullam, maxime aliquam modi 
    voluptas reprehenderit! Cumque, quas.`;
  hero.appendChild(heroImage);
  hero.appendChild(title);
  hero.appendChild(text);

  return hero;
}

export default loadHero;