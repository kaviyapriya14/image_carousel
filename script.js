const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const imageCarousel = document.getElementById('image-carousel');

let currentIndex = 0;
let intervalId;

function showImage(index) {
  const translateValue = -index * 300;
  imageCarousel.style.transform = `translateX(${translateValue}px)`;
}

function startCarousel() {
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % imageCarousel.children.length;
    showImage(currentIndex);
  }, 2000);
}

function stopCarousel() {
  clearInterval(intervalId);
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + imageCarousel.children.length) % imageCarousel.children.length;
  showImage(currentIndex);
  stopCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % imageCarousel.children.length;
  showImage(currentIndex);
  stopCarousel();
});


startCarousel();
