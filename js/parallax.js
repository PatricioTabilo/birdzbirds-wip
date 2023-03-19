const image = document.querySelector('.construction-image');
const container = document.querySelector('.container');

container.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const centerX = container.clientWidth / 2;
  const centerY = container.clientHeight / 2;

  const offsetX = (mouseX - centerX) / 50;
  const offsetY = (mouseY - centerY) / 50;

  image.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});