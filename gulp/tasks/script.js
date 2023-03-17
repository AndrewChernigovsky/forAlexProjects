module.exports = function () {
	$.gulp.task('script-lib', function () {
		return $.gulp
			.src([
				'node_modules/jquery/dist/jquery.min.js',
				'node_modules/swiper/swiper-bundle.min.js',
			])
			.pipe($.gp.babel({
            	presets: ['@babel/env']
        	}))
			.pipe($.gp.concat('libs.min.js'))
			.pipe($.gulp.dest('build/js/libs/'))
			.pipe(
				$.bs.reload({
					stream: true,
				})
			);
	});

	$.gulp.task('script', function () {
		return $.gulp
			.src([
				'src/js/components/swiper.js',
				'src/js/main.js',
			])
			.pipe(
				$.gp.uglify()
			)
			.pipe($.gp.concat('main.min.js'))
			.pipe($.gulp.dest('build/js/'))
			.pipe(
				$.bs.reload({
					stream: true,
				})
			);
	})
};
