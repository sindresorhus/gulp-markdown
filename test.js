import test from 'ava';
import Vinyl from 'vinyl';
import m from '.';

test.cb('compiles Markdown to HTML', t => {
	const stream = m();

	stream.once('data', file => {
		t.is(file.relative, 'fixture.html');
		t.is(file.contents.toString(), '<p><em>foo</em></p>\n');
	});

	stream.on('end', t.end);

	stream.end(new Vinyl({
		path: 'fixture.md',
		contents: Buffer.from('*foo*')
	}));
});

test('exposes the marked object', t => {
	t.truthy(m.marked);
	t.truthy(m.marked.Renderer);
	t.truthy(m.marked.lexer);
	t.truthy(m.marked.parser);
});
