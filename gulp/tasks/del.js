module.exports = function () {
	$.gulp.task('del', function () {
		return $.gulp.src([
			'build/',
			'!build/img/'
		]
		)
			.pipe($.gp.clean({ force: true }))
	})
}
