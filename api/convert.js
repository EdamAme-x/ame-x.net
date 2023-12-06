const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const directoryPath = path.join(__dirname, "../src/assets");

fs.readdir(directoryPath, function (err, files) {
	if (err) {
		return console.log("Unable to scan directory: " + err);
	}
	files.forEach(function (file) {
		if (path.extname(file) === ".png") {
			let fileName = path.basename(file, ".png");
			sharp(directoryPath + "/" + file)
				.webp({ progressive: true })
				.toFile(directoryPath + "/" + fileName + ".webp", (err, info) => {
					if (err) {
						console.log(err);
					} else {
						console.log(info);
					}
				});
		}
	});
});
