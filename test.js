'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var markdown = require('./');

it('should compile Markdown to HTML', function (cb) {
	var stream = markdown();

	stream.once('data', function (file) {
		assert.equal(file.relative, 'fixture.html');
		assert.equal(file.contents.toString(), '<p><em>foo</em></p>\n');
	});

	stream.on('end', cb);

	stream.write(new gutil.File({
		path: 'fixture.md',
		contents: new Buffer('*foo*')
	}));

	stream.end();
});
