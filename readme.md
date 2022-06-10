# gulp-markdown

> Markdown to HTML with [`marked`](https://github.com/markedjs/marked)

*Issues with the output should be reported on the `marked` [issue tracker](https://github.com/markedjs/marked/issues).*

## Install

```sh
npm install --save-dev gulp-markdown
```

## Usage

```js
import gulp from 'gulp';
import markdown from 'gulp-markdown';

export default () => (
	gulp.src('intro.md')
		.pipe(markdown())
		.pipe(gulp.dest('dist'))
);
```

## API

### markdown(options?) <sup>(default export)</sup>

See the `marked` [options](https://marked.js.org/using_advanced#options).

### marked <sup>(named export)</sup>

Access the `marked` object to customize the [lexer](https://marked.js.org/using_pro#lexer), [parser](https://marked.js.org/using_pro#parser) or [renderer](https://marked.js.org/using_pro#renderer).
