const parall = document.querySelector('.parallax__image');
const layers = parall.children;

function moveLayersOnScroll(wScroll) {

   Array.from(layers).forEach(layer => {
      
      const divider = layer.dataset.speed;
      const strafe = wScroll * divider / 10;

      layer.style.transform = `translateY(-${strafe}%)`;

   });
}

window.addEventListener("scroll", event => {
   const wScroll = window.pageYOffset;
   moveLayersOnScroll(wScroll)
});