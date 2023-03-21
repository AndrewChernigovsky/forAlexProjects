"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swiperMain = swiperMain;

function swiperMain() {
  var i = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 800,
    loop: true,
    preloadImages: false,
    lazy: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false
    },
    centerInsufficientSlides: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    },
    breakpoints: {
      768: {
        spaceBetween: 40,
        slidesPerView: 1
      }
    }
  });
}