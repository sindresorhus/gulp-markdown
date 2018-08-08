import test from 'ava';
import Vinyl from 'vinyl';
import pEvent from 'p-event';
import markdown from '.';

test('compiles Markdown to HTML', async t => {
	const stream = markdown();
	const dataPromise = pEvent(stream, 'data');

	stream.end(new Vinyl({
		path: 'fixture.md',
		contents: Buffer.from('*foo*')
	}));

	const file = await dataPromise;

	t.is(file.relative, 'fixture.html');
	t.is(file.contents.toString(), '<p><em>foo</em></p>\n');
});

test('exposes the marked object', t => {
	t.truthy(markdown.marked);
	t.truthy(markdown.marked.Renderer);
	t.truthy(markdown.marked.lexer);
	t.truthy(markdown.marked.parser);
});
