const notify = require('gulp-notify');
const sass = require('gulp-sass')(require('sass'));
const cssimport = require('gulp-cssimport');
const rename = require('gulp-rename');

module.exports = function () {
	$.gulp.task('libsCSS', function () {
        return $.gulp
            .src('./src/libs/libs.sass')
            .pipe(sass())
            .on(
                'error',
                notify.onError({
                    title: 'Sass compiling error',
                    icon: './sys_icon/error_icon.png',
                    wait: true,
                })
            )
            .pipe(cssimport())
            .pipe(rename('libs.min.css'))
            .pipe($.gulp.dest('./build/libs'));
	});
};


// 	$.gulp.task('libsCSS', function () {
//     return $.gulp
//       .src(['node_modules/swiper/swiper-bundle.min.css'])
//       .pipe($.cleanCSS())
//       .pipe($.gp.concat('libs.min.css'))
//       .pipe($.gulp.dest('./build/libs/'));
//   });