var Jimp = require('jimp');
var fs = require('fs');
var files = fs.readdirSync('src/img/content/');

function foo() {
	return new Promise((resolve) => {
		function foo22() {
			let arr = [];

			RegExp = 

			files.forEach((el) => {
				arr.push(el);
			});

			for (let i = 0; i < arr.length; i++) {
				let path = 'src/img/content/' + arr[i];

				Jimp.read(path, (err, lenna) => {
					if (err) throw err;
					if (arr[i] === 'avatar22.jpg') {
						lenna
							.resize(2024, Jimp.AUTO)
							.quality(90)
							.write(`build/img/avatar22/${arr[i]}@4x${[i]}556x256.jpg`);
						lenna
							.resize(612, Jimp.AUTO)
							.quality(90)
							.write(`build/img/avatar22/${arr[i]}@2x${[i]}556x256.jpg`);
						lenna
							.resize(656, Jimp.AUTO)
							.quality(90)
							.write(`build/img/avatar22/${arr[i]}@1x${[i]}556x256.jpg`);

					}
					lenna
						.resize(1024, Jimp.AUTO)
						.quality(90)
						.write(`build/img/${arr[i]}@4x${[i]}256x256.jpg`);
					lenna
						.resize(512, Jimp.AUTO)
						.quality(90)
						.write(`build/img/${arr[i]}@2x${[i]}256x256.jpg`);
					lenna
						.resize(256, Jimp.AUTO)
						.quality(90)
						.write(`build/img/${arr[i]}@1x${[i]}256x256.jpg`);
				});
			}
		}
		foo22();
		resolve();
	});
}

module.exports = function () {
	async function jimpFoo() {
		const result = await foo();
		return result;
	}

	$.gulp.task('jimpFoo', function () {
		return jimpFoo();
	});
};
