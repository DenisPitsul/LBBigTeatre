
var mySwiper = new Swiper('.productions-swiper-container', {
    slidesPerView: 1,
    breakpoints: {
        0: {
          slidesPerView: 1.16,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 1.6,
        },
        1440: {
          slidesPerView: 3,
        }
      },
});

