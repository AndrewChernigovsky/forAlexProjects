module.exports = function () {

	$.gulp.task('sass', function () {
		return $.gulp
			.src([
				'./src/sass/**/*-d.sass',
				'./src/pug/components/**/**/*-d.sass',
				'!./src/pug/components/**/**/*-mq.sass',
				'!./src/sass/styles-mq.sass',
				'!./src/sass/default.sass',
			])
			.pipe($.gp.concat('styles.sass'))
			.pipe($.sass().on('error', $.sass.logError))
			.pipe(
				$.gp.autoprefix({
					browsers: ['> 2%', 'ie >= 10'],
					grid: true,
				})
			)
			.pipe($.gp.sourcemaps.init())
			.pipe($.cleanCSS())
			.pipe($.gp.sourcemaps.write())
			.pipe($.gp.rename('styles.css'))
			.pipe($.gulp.dest('./build/css'));
	});

	$.gulp.task('sassMQ', function () {
		return $.gulp
			.src([
				'./src/sass/**/*-mq.sass',
				'./src/pug/components/**/**/*-mq.sass',
				'!./src/pug/components/**/**/*-d.sass',
				'!./src/sass/styles-d.sass',
				'!./src/sass/default.sass',
			])
			.pipe($.gp.concat('styles-mq.sass'))
			.pipe($.sass().on('error', $.sass.logError))
			.pipe(
				$.gp.autoprefix({
					browsers: ['> 2%', 'ie >= 10'],
					grid: true,
				})
			)
			.pipe($.gp.sourcemaps.init())
			.pipe($.cleanCSS())
			.pipe($.gp.sourcemaps.write())
			.pipe($.gp.rename('styles-mq.css'))
			.pipe($.gulp.dest('./build/css'));
	});

	$.gulp.task('sassBase', function () {
		return $.gulp
			.src([
				'./src/sass/**/default.sass',
				'!./src/pug/components/**/**/*-d.sass',
				'!./src/sass/styles-d.sass',
				'!./src/pug/components/**/**/*-mq.sass',
				'!./src/sass/styles-mq.sass',
			])
			.pipe($.gp.concat('styles-default.sass'))
			.pipe($.sass().on('error', $.sass.logError))
			.pipe(
				$.gp.autoprefix({
					browsers: ['> 2%', 'ie >= 10'],
					grid: true,
				})
			)
			.pipe($.gp.sourcemaps.init())
			.pipe($.cleanCSS())
			.pipe($.gp.sourcemaps.write())
			.pipe($.gp.rename('styles-default.css'))
			.pipe($.gulp.dest('./build/css'));
	});
};
