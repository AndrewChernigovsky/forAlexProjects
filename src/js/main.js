import swiperMain from './components/swiper';
import tabs from './components/tabs';



(($) => {
    $(() => {
        swiperMain.init();
        tabs.init();
	})
})(jQuery);
