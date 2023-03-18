

global.$ = {
	gulp: require('gulp'),
	gp: require('gulp-load-plugins')(),
	bs: require('browser-sync').create(),
	sass: require('gulp-sass')(require('sass')),
	cleanCSS: require('gulp-clean-css'),

	path: {
		tasks: require('./gulp/config/tasks.js')
	}
};

$.path.tasks.forEach(function (taskPath) {
	require(taskPath)();
});


$.gulp.task(
	'resizes',

	$.gulp.series(
		'jimpContent',
		'jimpDecor',
		'images',
		'svgSprite'
	)
)

$.gulp.task(
	'default',
	$.gulp.series(
		'del',
		'copy',
		'libsCSS',

		$.gulp.parallel(
			'pug',

			$.gulp.series('sassBase', 'sass', 'sassMQ'),
			'script-lib',
			'script11'
		),
		$.gulp.parallel('watcher', 'serve')
	)
);

$.gulp.task(
	'build',
	$.gulp.series(
		'del',
		'copy',
		'resizes',
		'libsCSS',
		$.gulp.parallel('pug', 'sass', 'script-lib', 'script'),
		$.gulp.parallel('watcher', 'serve')
	)
);