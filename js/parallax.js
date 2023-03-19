const personajes = document.querySelector('.characters');
const logo = document.querySelector('.logo');
const texto = document.querySelector('.coming-soon-text');
const contenedor = document.querySelector('body');

contenedor.addEventListener("mousemove", function(e) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const centerX = contenedor.clientWidth / 2;
  const centerY = contenedor.clientHeight / 2;

  const offsetX = (mouseX - centerX) / 50;
  const offsetY = (mouseY - centerY) / 50;

  personajes.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});
