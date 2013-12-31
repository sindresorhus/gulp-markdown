# [gulp](http://gulpjs.com)-markdown [![Build Status](https://secure.travis-ci.org/sindresorhus/gulp-markdown.png?branch=master)](http://travis-ci.org/sindresorhus/gulp-markdown)

> Markdown to HTML with [marked](https://github.com/chjj/marked)

*Issues with the output should be reported on the marked [issue tracker](https://github.com/chjj/marked/issues).*


## Install

Install with [npm](https://npmjs.org/package/gulp-markdown)

```
npm install --save-dev gulp-markdown
```


## Example

```js
var gulp = require('gulp');
var markdown = require('gulp-markdown');

gulp.task('default', function () {
	gulp.src('intro.md')
		.pipe(markdown())
		.pipe(gulp.dest('dist'));
});
```


## API

### markdown(options)

See the marked [options](https://github.com/chjj/marked#options-1).


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
