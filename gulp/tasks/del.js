module.exports = function () {
	$.gulp.task('del', function () {
		return $.gulp.src('build/')
			.pipe($.gp.clean({ force: true }))
	})
}
