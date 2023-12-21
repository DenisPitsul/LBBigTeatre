
var mySwiper = new Swiper('.hero-swiper-container', {
  slidesPerView: 1, // Відображення по одному слайду

  navigation: {
    nextEl: '.hero-swiper-button-next',
    prevEl: '.hero-swiper-button-prev',
  },

  on: {
    slideChange: function () {
      updateButtonStyles();
    },
    reachBeginning: function () {
      updateButtonStyles();
    },
    reachEnd: function () {
      updateButtonStyles();
    },
  },
});

function updateButtonStyles() {
  var prevText = document.querySelector('.hero-swiper-button-text-prev');
  var prevIcon = document.querySelector('.hero-swiper-icon-prev');
  var nextText = document.querySelector('.hero-swiper-button-text-next');
  var nextIcon = document.querySelector('.hero-swiper-icon-next');
  if (mySwiper.isBeginning) {
    prevText.classList.add('hero-swiper-text-disabled');
    prevIcon.classList.add('hero-swiper-icon-disabled');
  } else {
    prevText.classList.remove('hero-swiper-text-disabled');
    prevIcon.classList.remove('hero-swiper-icon-disabled');
  }

  if (mySwiper.isEnd) {
    nextText.classList.add('hero-swiper-text-disabled');
    nextIcon.classList.add('hero-swiper-icon-disabled');
  } else {
    nextText.classList.remove('hero-swiper-text-disabled');
    nextIcon.classList.remove('hero-swiper-icon-disabled');
  }
}

