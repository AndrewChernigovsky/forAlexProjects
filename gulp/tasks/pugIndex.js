module.exports = function () {
	$.gulp.task('pugIndex', function () {
		return $.gulp
			.src('./src/pug/index.pug')
			.pipe(
				$.gp.pug({
					pretty: true,
				})
			)
			.pipe($.gulp.dest(['./build/']))
			.on('end', $.bs.reload);
	});
};
