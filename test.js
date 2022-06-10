import {Buffer} from 'node:buffer';
import test from 'ava';
import Vinyl from 'vinyl';
import {pEvent} from 'p-event';
import markdown, {marked} from './index.js';

test('compiles Markdown to HTML', async t => {
	const stream = markdown();
	const dataPromise = pEvent(stream, 'data');

	stream.end(new Vinyl({
		path: 'fixture.md',
		contents: Buffer.from('*foo*'),
	}));

	const file = await dataPromise;

	t.is(file.relative, 'fixture.html');
	t.is(file.contents.toString(), '<p><em>foo</em></p>\n');
});

test('exposes the marked object', t => {
	t.truthy(marked);
	t.truthy(marked.Renderer);
	t.truthy(marked.lexer);
	t.truthy(marked.parser);
});
