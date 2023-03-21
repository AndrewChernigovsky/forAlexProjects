import { swiperMain } from './components/swiper';
import { tabs } from './components/tabs.js';
import { accordion } from './components/accordion.js';
import { validation } from './components/validation.js';

(($) => {
	$(() => {
		swiperMain
		tabs()
		accordion()
		validation()
	}
)})(jQuery);
