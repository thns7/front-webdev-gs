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

const iconMenu = document.querySelector(".hamburguer")
const menu = document.querySelector(".links")

iconMenu.addEventListener("click", function() {
    menu.classList.toggle("mostrar")
})

const menu2 = document.querySelector("header")
iconMenu.addEventListener("click", function() {
  menu2.classList.toggle("mostrar2")
})

