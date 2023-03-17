module.exports = function () {
	$.gulp.task('copy', function () {
		return $.gulp
			.src([
				'./src/**/*',
				'!./src/sass/**',
				'!./src/pug/**',
				'!./src/js/**',
				'!./src/imgOriginal/**'
			])
			.pipe($.gulp.dest('./build'));
	});
};
