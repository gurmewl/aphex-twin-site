// assets/scripts/radialMenu.js
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const radialMenu = document.getElementById('radial-menu');
  const links = radialMenu.querySelectorAll('a');
  let open = false;
  navToggle.addEventListener('click', () => {
    open = !open;
    if (open) {
      links.forEach((link, i) => {
        const angle = (i / links.length) * Math.PI * 2 - Math.PI/2;
        const radius = 100;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        link.style.transform = `translate(${x}px, ${y}px)`;
      });
      radialMenu.classList.add('open');
    } else {
      links.forEach(link => {
        link.style.transform = `translate(0, 0)`;
      });
      radialMenu.classList.remove('open');
    }
  });
});