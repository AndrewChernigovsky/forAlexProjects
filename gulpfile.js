

global.$ = {
	gulp: require('gulp'),
	gp: require('gulp-load-plugins')(),
	bs: require('browser-sync').create(),
	sass: require('gulp-sass')(require('sass')),
	cleanCSS: require('gulp-clean-css'),
	squoosh: require('gulp-squoosh'),


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
		'jimpFoo',
		$.gulp.parallel('pug', 'sass', 'script-lib', 'script'),
		'images',
		$.gulp.parallel('watcher', 'serve')
	)
);