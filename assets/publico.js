document.addEventListener("DOMContentLoaded", function () {
  const faixa = document.querySelector('.slide-faixa');
  const totalSlides = document.querySelectorAll('.slide').length;
  let currentIndex = 0;

  function mostrarSlide() {
    const offset = -currentIndex * 100;
    faixa.style.transform = `translateX(${offset}%)`;
    currentIndex = (currentIndex + 1) % totalSlides;
  }

  setInterval(mostrarSlide, 4000);
});