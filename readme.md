# gulp-markdown [![Build Status](https://travis-ci.org/sindresorhus/gulp-markdown.svg?branch=master)](https://travis-ci.org/sindresorhus/gulp-markdown)

> Markdown to HTML with [`marked`](https://github.com/markedjs/marked)

*Issues with the output should be reported on the `marked` [issue tracker](https://github.com/markedjs/marked/issues).*


## Install

```
$ npm install --save-dev gulp-markdown
```


## Usage

```js
const gulp = require('gulp');
const markdown = require('gulp-markdown');

gulp.task('default', () =>
	gulp.src('intro.md')
		.pipe(markdown())
		.pipe(gulp.dest('dist'))
);
```


## API

### markdown([options])

See the `marked` [options](https://marked.js.org/#/USING_ADVANCED.md#options).

### markdown.marked

Access the `marked` object to customize the [lexer](https://marked.js.org/#/USING_PRO.md#lexer), [parser](https://marked.js.org/#/USING_PRO.md#parser) or [renderer](https://marked.js.org/#/USING_PRO.md#renderer).


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
