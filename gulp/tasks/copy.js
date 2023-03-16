module.exports = function () {
	$.gulp.task('copy', function () {
		return $.gulp
			.src([ './src/**/*', '!./src/sass/**', '!./src/pug/**', '!./src/js/**'])
			.pipe($.gulp.dest('./build'));
	});

	$.gulp.task('copyBuild', function () {
		return $.gulp
			.src('src')
			.pipe($.gulp.dest('./build'));
	});
};
