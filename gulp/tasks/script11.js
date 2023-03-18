'use strict';

const gulp = require('gulp');
const notify = require('gulp-notify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');

module.exports = function () {
    return $.gulp.task('script11', function() {
        return browserify({
            entries: './src/js/main.js',
        })
            .transform('babelify', {
                presets: ['@babel/preset-env'],
            })
            .bundle()
            .on(
                'error',
                notify.onError({
                    title: 'JS compiling error',
                    wait: true,
                })
            )
            .pipe(source('main.min.js'))
            .pipe(gulp.dest('./build/js'))
    }
)}
