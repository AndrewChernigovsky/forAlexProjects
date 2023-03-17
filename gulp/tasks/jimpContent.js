var Jimp = require('jimp');
var fs = require('fs');
var files = fs.readdirSync('src/imgOriginal/content/');

const sizes = {
	"256": '256x256',
	"512": '512x512',
	"1024": '1024x1024',
	"2048": '2048x2048',
};

let arrFiles = [];

files.forEach((file) => {
	file = file.replace(/.jpg/, '');
	arrFiles.push(file)
});

const pathTo = 'src/img/content/';

function fooContent() {
	return new Promise((resolve) => {
		function foo22() {
			let arr = [];

			files.forEach((el) => {
				arr.push(el);
			});


			for (let i = 0; i < arr.length; i++) {

				let path = 'src/imgOriginal/content/' + arr[i];

				Jimp.read(path, (err, lenna) => {

					if (err) throw err;

					lenna
						.resize(8196, Jimp.AUTO)
						.write(`${pathTo}` + arrFiles[i] + '/' + `${arr[i]}@4x${sizes[1024]}.jpg`)
					
					lenna
						.resize(4096, Jimp.AUTO)
						.write(`${pathTo}` + arrFiles[i] + '/' + `${arr[i]}@3x${sizes[1024]}.jpg`)
						.write(`${pathTo}` + arrFiles[i] + '/' + `${arr[i]}@4x${sizes[512]}.jpg`)
					
					lenna
						.resize(2048, Jimp.AUTO)
						.write(`${pathTo}` + arrFiles[i] + '/' + `${arr[i]}@2x${sizes[1024]}.jpg`)
						.write(`${pathTo}` + arrFiles[i] + '/' + `${arr[i]}@3x${sizes[512]}.jpg`)
						.write(`${pathTo}` + arrFiles[i] + '/' + `${arr[i]}@4x${sizes[256]}.jpg`)
					
					lenna
						.resize(1024, Jimp.AUTO)
						.write(`${pathTo}` + arrFiles[i] + '/' + `${arr[i]}@1x${sizes[1024]}.jpg`)
						.write(`${pathTo}` + arrFiles[i] + '/' + `${arr[i]}@2x${sizes[512]}.jpg`)
						.write(`${pathTo}` + arrFiles[i] + '/' + `${arr[i]}@3x${sizes[256]}.jpg`)
					
					lenna
						.resize(512, Jimp.AUTO)
						.write(`${pathTo}` + arrFiles[i] + '/' + `${arr[i]}@1x${sizes[512]}.jpg`)
						.write(`${pathTo}` + arrFiles[i] + '/' + `${arr[i]}@2x${sizes[256]}.jpg`)
		
					lenna
						.resize(256, Jimp.AUTO)
						.write(`${pathTo}` + arrFiles[i] + '/' + `${arr[i]}@1x${sizes[256]}.jpg`)
	
				})
			}
		}
		foo22();
		resolve();
	});
}

module.exports = function () {
	async function jimpFoo() {
		const result = await fooContent();
		return result;
	}

	$.gulp.task('jimpContent', function () {
		return jimpFoo();
	});
};
