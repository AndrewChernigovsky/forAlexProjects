const gulpSquoosh = require('gulp-squoosh');
const gulpCache = require('gulp-cache');
const path = require('path');


module.exports = function () {
	$.gulp.task('images', function () {
		return (
			$.gulp
				.src(['./src/img/**'])
				// .pipe($.gp.webp())
				// .pipe($.gp.imagemin())
				.pipe(
					gulpCache(
						gulpSquoosh(({ width, height, size, filePath }) => ({
							encodeOptions: {
								jxl: {},
								avif: {},
								webp: {},
								wp2: {},
								...(path.extname(filePath) === '.png'
									? { oxipng: {} }
									: { mozjpeg: {} }),
							},
							preprocessOptions: {
								resize: {
									enabled: true,
									width: width * 0.1,
									height: height * 0.1,
								},
							},
						}))
					)
				)
				.pipe($.gulp.dest('build/img'))
		);
	});
};
