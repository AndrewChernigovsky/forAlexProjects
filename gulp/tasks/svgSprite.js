// const gulp = require('gulp');
// const svgSprite = require('gulp-svg-sprite');

module.exports = function () {
	$.gulp.task('svgSprite', function () {
		return $.gulp
			.src('src/icons-svg/**/*.svg')
			.pipe(
				$.gp.svgSprite({
					shape: {
						dimension: {
							// Set maximum dimensions
							maxWidth: 32,
							maxHeight: 32,
						},
						// spacing: {
						// 	// Add padding
						// 	padding: 10,
						// },
						// dest: 'icons/intermediate-svg', // Keep the intermediate files
					},
					mode: {
						// view: {
						// 	// Activate the «view» mode
						// 	bust: false,
						// 	render: {
						// 		scss: true, // Activate Sass output (with default options)
						// 	},
						// },
						stack: {
							sprite: '../sprite.svg',
						},
						// symbol: true, // Activate the «symbol» mode
					},
				})
			)
			.pipe($.gulp.dest('build/icons-svg/'));
	})
}
