import Swiper from 'swiper/swiper-bundle';

// Find all sliders on a page
var swiperSliders = document.querySelectorAll('.swiper-container');

// Default options for swiper
var swiperDefaultOptions = {};

swiperSliders.forEach(el => {
    swiperDefaultOptions = {};
    // Combine Default options for swiper with selector that can be outside the swiper-container (for example Arrows)
    Object.assign(swiperDefaultOptions, {
        navigation: {
            disabledClass: 'm-disabled',
            nextEl: el.closest('.slot').querySelector('.button-arrow.m-right'),
            prevEl: el.closest('.slot').querySelector('.button-arrow.m-left')
        },
        scrollbar: {
            el: el.closest('.slot').querySelector('.swiper-scrollbar')
        },
    });

    var options = el.dataset.swiperOptions ? Object.assign(swiperDefaultOptions, JSON.parse(el.dataset.swiperOptions)) : swiperDefaultOptions;
    console.log(options);
    new Swiper(el, options);
})
