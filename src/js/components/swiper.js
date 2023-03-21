export const swiperMain = new Swiper('.swiper', {
		slidesPerView: 1,
		spaceBetween: 20,
		speed: 800,
		loop: true,
		preloadImages: false,
		lazy: true,
		autoplay: {
			delay: 5500,
			disableOnInteraction: false,
		},
		centerInsufficientSlides: true,
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			768: {
				spaceBetween: 40,
				slidesPerView: 1,
			},
		},
	})