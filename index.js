'use strict';
var es = require('event-stream');
var gutil = require('gulp-util');
var marked = require('marked');

module.exports = function (options) {
	return es.map(function (file, cb) {
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
