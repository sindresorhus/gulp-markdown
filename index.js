'use strict';
const through = require('through2');
const marked = require('marked');
const PluginError = require('plugin-error');

module.exports = options => {
	return through.obj((file, enc, cb) => {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new PluginError('gulp-markdown', 'Streaming not supported'));
			return;
		}

		marked(file.contents.toString(), options, (err, data) => {
			if (err) {
				cb(new PluginError('gulp-markdown', err, {fileName: file.path}));
				return;
			}

			file.contents = Buffer.from(data);
			file.extname = '.html';

			cb(null, file);
		});
	});
};

module.exports.marked = marked;
