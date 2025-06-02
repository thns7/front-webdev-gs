document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector('header');


  if (header) {
    setTimeout(() => {
      header.classList.add('appear');
    }, 200);
  }

  
  const faixa = document.querySelector('.slide-faixa');
  const slides = document.querySelectorAll('.slide');

  if (faixa && slides.length > 0) {
    let currentIndex = 0;

    function mostrarSlide() {
      const offset = -currentIndex * 100;
      faixa.style.transform = `translateX(${offset}%)`;
      currentIndex = (currentIndex + 1) % slides.length;
    }

    setInterval(mostrarSlide, 4000);
  }
});

