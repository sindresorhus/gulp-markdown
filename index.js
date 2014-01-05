'use strict';
var gutil = require('gulp-util');
var map = require('map-stream');
var marked = require('marked');

module.exports = function (options) {
	return map(function (file, cb) {
		marked(file.contents.toString(), options, function (err, data) {
			if (err) {
				return cb(new Error('gulp-markdown: ' + err));
			}

			file.contents = new Buffer(data);
			file.path = gutil.replaceExtension(file.path, '.html');
			cb(null, file);
		});
	});
};
