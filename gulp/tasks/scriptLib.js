/**
 * Build js vendor (concatenate vendors array)
 */
'use strict';

const gulp = require('gulp');
const filesExist = require('files-exist');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

module.exports = function () {

    $.gulp.task('script-lib', function () {
            const jsVendors = require('../../src/libs/libs.js');
            const noneES5 = jsVendors.es5.length === 0 ? true : false;
            const noneES6 = jsVendors.es6.length === 0 ? true : false;

            if (noneES5 && noneES6) {
                return ;
            } else if (noneES6) {
                return $.gulp
                    .src(filesExist(jsVendors.es5))
                    .pipe(concat('libs.min.js'))
                    .pipe($.gulp.dest('./build/libs'));
            } else if (noneES5) {
                return $.gulp
                  .src(filesExist(jsVendors.es6))
                  .pipe(babel({ presets: ['@babel/env'] }))
                  .pipe(concat('libs.min.js'))
                  .pipe(uglify())
                  .pipe($.gulp.dest('./build/libs'));
            } else {
                return $.gulp
                  .src(filesExist(jsVendors.es6))
                  .pipe(babel({ presets: ['@babel/env'] }))
                  .pipe($.gulp.src(filesExist(jsVendors.es5)))
                  .pipe(concat('libs.min.js'))
                  .pipe(uglify())
                  .pipe($.gulp.dest('./build/libs'));
            }
    })
};

// $.gulp.task('script-lib', function () {
//   return $.gulp
//     .src(['node_modules/jquery/dist/jquery.min.js', 'node_modules/swiper/swiper-bundle.min.js'])
//     .pipe($.gp.concat('libs.min.js'))
//     .pipe($.gulp.dest('build/js/libs/'))
//     .pipe(
//       $.bs.reload({
//         stream: true,
//       })
//     );
// });
