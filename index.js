'use strict';
const through = require('through2');
const marked = require('marked');
const PluginError = require('plugin-error');

module.exports = options => {
	return through.obj((file, encoding, callback) => {
		if (file.isNull()) {
			callback(null, file);
			return;
		}

		if (file.isStream()) {
			callback(new PluginError('gulp-markdown', 'Streaming not supported'));
			return;
		}

		marked(file.contents.toString(), options, (error, data) => {
			if (error) {
				callback(new PluginError('gulp-markdown', error, {fileName: file.path}));
				return;
			}

			file.contents = Buffer.from(data);
			file.extname = '.html';

			callback(null, file);
		});
	});
};

module.exports.marked = marked;
