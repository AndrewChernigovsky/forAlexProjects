

module.exports = function () {
	function watch(cb) {
		watch(
			['./src/sass/**/*.sass', './src/pug/components/**/**/*.sass'],
			$.gulp.series('sass', 'pug')
		);
		cb();
	}
	watch()
	$.gulp.task('watcher', function () {
		$.gp.plumber();
		$.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug'));
		$.gulp.watch(
			['./src/sass/**/*.sass', './src/pug/components/**/**/*.sass'],
			$.gulp.series('sass', 'pug')
		);
		cb();
		$.gulp.watch('./src/js/*.js', $.gulp.series('script'));
		$.gp.plumber.stop();
	});
};
