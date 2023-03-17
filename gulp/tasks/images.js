module.exports = function () {
	$.gulp.task('images', function () {
		return (
			$.gulp
				.src(['./src/img/**/*'])
				.pipe($.gp.webp())
				.pipe($.gulp.dest('src/img'))
		);
	});
};
