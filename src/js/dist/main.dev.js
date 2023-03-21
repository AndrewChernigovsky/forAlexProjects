"use strict";

var _swiper = require("./components/swiper");

var _tabs = require("./components/tabs.js");

var _accordion = require("./components/accordion.js");

var _validation = require("./components/validation.js");

(function ($) {
  $(function () {
    (0, _swiper.swiperMain)();
    (0, _tabs.tabs)();
    (0, _accordion.accordion)();
    (0, _validation.validation)();
  });
})(jQuery);