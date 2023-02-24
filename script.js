const container = document.querySelector('.container');

container.addEventListener('click', e => {
  if (e.target.classList.contains('heading-dinamic')) {
    const classElem = document.querySelector(e.target.dataset.for);
    classElem.classList?.toggle('no-show');
    e.target.classList.toggle('selected');
  }
});

// Funcionalidad Carrucel
const slidesContainer = document.querySelector('.slides');
const prevBtn = document.querySelector('.btn-left');
const nextBtn = document.querySelector('.btn-right');
const slides = slidesContainer.querySelectorAll('.project');
const squares = document.querySelector('.squares');

let currentSlide = 0;
const maxSlides = slides.length;

const createSquares = function () {
  slides.forEach((_, i) => {
    squares.insertAdjacentHTML(
      'beforeend',
      `<button class="square" data-slide="${i}">&nbsp;</button>`
    );
  });
};

const activateSquare = function (slide) {
  document.querySelectorAll('.square').forEach(sqr => {
    sqr.classList.remove('square--fill');
  });
  document
    .querySelector(`.square[data-slide="${slide}"]`)
    .classList.add('square--fill');
};

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${115 * (i - slide)}%)`)
  );

  activateSquare(slide);
};
const init = function () {
  createSquares();
  goToSlide(0);
};

init();

const nextSlide = function () {
  if (++currentSlide === maxSlides) currentSlide = 0;
  goToSlide(currentSlide);
};

const prevSlide = function () {
  if (--currentSlide < 0) currentSlide = maxSlides - 1;
  goToSlide(currentSlide);
};
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'ArrowRight') nextSlide();
});

squares.addEventListener('click', e => {
  if (e.target.classList.contains('square')) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
  }
});
