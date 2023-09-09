const swiper = new Swiper('.customers-swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.customers-swiper-pagination',
  },
  autoplay: {
    delay: 5000,
  },
});
