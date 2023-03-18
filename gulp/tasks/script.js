module.exports = function () {

	$.gulp.task('script', function () {
		return $.gulp
			.src([
				'src/js/main.js',
			])
			.pipe(
				$.gp.uglify()
			)
			.pipe($.gp.concat('main.min.js'))
			.pipe($.gulp.dest('build/js'))
			.pipe(
				$.bs.reload({
					stream: true,
				})
			);
	})
};
