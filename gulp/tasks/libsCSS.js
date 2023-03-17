module.exports = function () {
	$.gulp.task('libsCSS', function () {
		return $.gulp
			.src([
				'node_modules/swiper/swiper-bundle.min.css',
				// 'node_modules/swiper/swiper-element-bundle.min.js',
			])
			.pipe($.cleanCSS())
			.pipe($.gp.concat('libs.min.css'))
			.pipe($.gulp.dest('./build/libs/'));
	});
};
