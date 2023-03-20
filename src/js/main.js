// import swiperMain from './components/swiper';
import { tabs } from './components/tabs.js';
import { accordion } from './components/accordion.js';
import { validation, togglePassword, toggleConfirm } from './components/validation.js';

(($) => {
	$(() => {
		tabs()
		accordion()
		validation()
	}
)})(jQuery);
