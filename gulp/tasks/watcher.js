module.exports = function () {
	$.gulp.task('watcher', function () {
		$.gp.plumber();
		$.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug'));
		$.gulp.watch(
			['./src/sass/**/*.sass', './src/pug/components/**/**/*.sass'],
			$.gulp.series('sass', 'pug')
		);
		$.gulp.watch(
			'./src/js/*.js',
			$.gulp.series('script')
		);
		$.gp.plumber.stop();
	});
};
