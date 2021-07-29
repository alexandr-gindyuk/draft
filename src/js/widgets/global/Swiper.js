import Swiper from 'swiper/swiper-bundle';

// Find all sliders on a page
var swiperSliders = document.querySelectorAll('.swiper-container');

// Default options for swiper
var swiperDefaultOptions = {
    navigation: {
        disabledClass: 'm-disabled',
        nextEl: '.button-arrow.m-right',
        prevEl: '.button-arrow.m-left'
    },
    slidesPerView: 1,
    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 40
        }
      }
}

swiperSliders.forEach(el => {
    var options = el.dataset.swiperOptions ? Object.assign(swiperDefaultOptions, JSON.parse(el.dataset.swiperOptions)) : swiperDefaultOptions
    new Swiper(el, options);
})
