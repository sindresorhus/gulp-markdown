'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var marked = require('marked');

module.exports = function (options) {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			this.push(file);
			return cb();
		}

		if (file.isStream()) {
			this.emit('error', new gutil.PluginError('gulp-markdown', 'Streaming not supported'));
			return cb();
		}

		marked(file.contents.toString(), options, function (err, data) {
			if (err) {
				this.emit('error', new gutil.PluginError('gulp-markdown', err));
			} else {
				file.contents = new Buffer(data);
				file.path = gutil.replaceExtension(file.path, '.html');
			}

			this.push(file);
			cb();
		}.bind(this));
	});
};
