module.exports = function () {

	$.gulp.task('sass', function () {
		return $.gulp
			.src(['./src/sass/**/*.sass', './src/pug/components/**/**/*.sass'])
			.pipe($.gp.concat('styles.sass'))
			.pipe($.sass().on('error', $.sass.logError))
			.pipe($.gp.sourcemaps.init())
			.pipe($.cleanCSS())
			.pipe($.gp.sourcemaps.write())
			.pipe($.gp.rename('styles.css'))
			.pipe($.gulp.dest('./build/css'));
	});
};
