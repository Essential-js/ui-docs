import * as React from 'react';
import * as ContentsEN from '@essential-js/ui-docs/en';

const DEFAULT_CONTENT = 'NotFound';

export /*bundle*/
function View({ uri }) {
	const content = uri.vars.get('content');
	const contentId = !content ? DEFAULT_CONTENT : content;

	const replace = (text) => text.replace(text[0], text[0].toUpperCase());
	const name = contentId.split('-').map(replace).join('');

	const Content = ContentsEN[name] || ContentsEN[DEFAULT_CONTENT];

	return (
		<div className="page__container">
			<Content />
		</div>
	);
}
