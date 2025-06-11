// assets/scripts/interactions.js
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  const navToggle = document.getElementById('nav-toggle');
  const radialMenu = document.getElementById('radial-menu');
  let menuOpen = false;
  navToggle.addEventListener('click', () => {
    menuOpen = !menuOpen;
    if (menuOpen) {
      const links = radialMenu.querySelectorAll('a');
      links.forEach((link, i) => {
        const angle = (i / links.length) * Math.PI * 2 - Math.PI/2;
        const radius = 100;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        link.style.transform = `translate(${x}px, ${y}px)`;
      });
      radialMenu.classList.add('open');
    } else {
      const links = radialMenu.querySelectorAll('a');
      links.forEach(link => {
        link.style.transform = `translate(0, 0)`;
      });
      radialMenu.classList.remove('open');
    }
  });

  const heroText = document.getElementById('hero-text');
  let clickCount = 0;
  heroText.addEventListener('click', () => {
    clickCount++;
    if (clickCount === 5) {
      const secretLink = document.getElementById('secret-link');
      secretLink.style.display = 'block';
      gsap.fromTo(secretLink, { opacity: 0 }, { opacity: 1, duration: 1 });
    }
    setTimeout(() => { clickCount = 0; }, 1000);
  });
});
