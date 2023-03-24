module.exports = function () {

	$.gulp.task('watcher', function () {
		$.gp.plumber()
        $.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug', 'pugIndex'))

        $.gulp.watch(['./src/sass/**/*.sass', './src/pug/components/**/**/*.sass'], $.gulp.series('sass', 'sassMQ', 'sassBase', 'pug'));

		$.gulp.watch('./src/**/**/*.js', $.gulp.series('script-lib', 'script11', 'script'));
		$.gp.plumber.stop()
	});
};
