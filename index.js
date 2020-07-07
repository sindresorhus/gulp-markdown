'use strict';
const {promisify} = require('util');
const through = require('through2');
const marked = require('marked');
const PluginError = require('plugin-error');

module.exports = options => {
	marked.use(options);
	const pMarked = promisify(marked);

	return through.obj(async (file, encoding, callback) => {
		if (file.isNull()) {
			callback(null, file);
			return;
		}

		if (file.isStream()) {
			callback(new PluginError('gulp-markdown', 'Streaming not supported'));
			return;
		}

		try {
			const data = await pMarked(file.contents.toString());
			file.contents = Buffer.from(data);
			file.extname = '.html';
			callback(null, file);
		} catch (error) {
			callback(new PluginError('gulp-markdown', error, {fileName: file.path}));
		}
	});
};

module.exports.marked = marked;
