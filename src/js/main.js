import swiperMain from './components/swiper';
import tabs from './components/tabs.js';

(($) => {
    $(() => {
		swiperMain.init()
		tabs.init()
	})
})(jQuery);