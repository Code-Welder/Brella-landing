const sliderHTML = document.querySelector('.splide');
const prevBtn = document.querySelector('.slider__arrow--prev');
const nextBtn = document.querySelector('.slider__arrow--next');

const slider = new Splide(sliderHTML, {
  trimSpace: false,
  fixedWidth: 146,
  width: 1020,
  gap: 80,
  arrows: false,
  pagination: false,
  perPage: 5,
  trimSpace: true,
  padding: {
    left: 20,
    right: 20,
  },
  breakpoints: {
    1199: {
      width: 900,
      perPage: 4,
    },
    767: {
      width: 660,
      perPage: 3,
    },
    575: {
      width: 200,
      perPage: 1,
    },
  },
}).mount();

prevBtn.onclick = () => {
  slider.go('-');
};

nextBtn.onclick = () => {
  slider.go('+');
};
