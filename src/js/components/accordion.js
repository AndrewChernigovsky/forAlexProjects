export function accordion() {

	$('.js-faq-title').on('click', function (e) {
		e.preventDefault();
		let $this = $(this);

		if (!$this.hasClass('accordion__active')) {
			$('.js-faq-content').slideUp(800);
			$('.js-faq-title').removeClass('accordion__active');
			$('.js-faq-rotate').removeClass('accordion__rotate');
		}

		$this.toggleClass('accordion__active');
		$this.next().slideToggle();
		$('.js-faq-rotate', this).toggleClass('accordion__rotate');
	});
}