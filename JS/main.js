// Seleccionamos el segundo video
const segundoVideo = document.querySelectorAll('video')[1]; // [1] porque es el segundo video en el HTML

// Nos aseguramos de que tenga loop y mute
segundoVideo.loop = true;
segundoVideo.muted = true;
segundoVideo.autoplay = true;
segundoVideo.playsInline = true; // importante para móviles

// Intentamos reproducirlo al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  segundoVideo.play().catch(() => {
    // Si el autoplay es bloqueado por el navegador, reproducimos al primer clic
    document.addEventListener('click', () => segundoVideo.play());
  });
});
  



const imgs = document.querySelectorAll("img");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

imgs.forEach(img => observer.observe(img));