const images = document.querySelectorAll('.carousel-img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let current = 0;

function updateCarousel(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

prevBtn.addEventListener('click', () => {
  current = (current - 1 + images.length) % images.length;
  updateCarousel(current);
});

nextBtn.addEventListener('click', () => {
  current = (current + 1) % images.length;
  updateCarousel(current);
});
