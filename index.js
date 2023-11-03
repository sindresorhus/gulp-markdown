import {Buffer} from 'node:buffer';
import {marked} from 'marked';
import {gulpPlugin} from 'gulp-plugin-extras';

export default function gulpMarked(options) {
	if (options) {
		marked.use(options);
	}

	return gulpPlugin('gulp-markdown', async file => {
		file.contents = Buffer.from(marked.parse(file.contents.toString()));
		file.extname = '.html';
		return file;
	});
}

export {marked} from 'marked';
