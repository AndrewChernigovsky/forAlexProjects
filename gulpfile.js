
global.$ = {
	gulp: require('gulp'),
	gp: require('gulp-load-plugins')(),
	bs: require('browser-sync').create(),
	sass: require('gulp-sass')(require('sass')),
	path: {
		tasks: require('./gulp/config/tasks.js')
	}
};

$.path.tasks.forEach(function (taskPath) {
	require(taskPath)();
});

$.gulp.task(
	'default',
	$.gulp.series(
		'copyBuild',
		'del',
		'copy',
		'libsCSS',
		$.gulp.parallel('pug', 'sass', 'script-lib', 'script'),
		$.gulp.parallel('watcher', 'serve')
	)
);