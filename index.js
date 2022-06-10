import {Buffer} from 'node:buffer';
import transformStream from 'easy-transform-stream';
import PluginError from 'plugin-error';
import {marked} from 'marked';

export default function gulpMarked(options) {
	if (options) {
		marked.use(options);
	}

	return transformStream({objectMode: true}, async file => {
		if (file.isNull()) {
			return file;
		}

		if (file.isStream()) {
			throw new PluginError('gulp-markdown', 'Streaming not supported');
		}

		try {
			file.contents = Buffer.from(marked.parse(file.contents.toString()));
		} catch (error) {
			throw new PluginError('gulp-markdown', error, {fileName: file.path});
		}

		file.extname = '.html';

		return file;
	});
}

export {marked} from 'marked';
