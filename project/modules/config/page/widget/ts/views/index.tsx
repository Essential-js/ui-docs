import * as React from 'react';
import * as ContentsESP from '@essential-js/ui-docs/esp';
import * as ContentsEN from '@essential-js/ui-docs/en';
import { beyond } from '@beyond-js/kernel/core';

const DEFAULT_CONTENT = 'NotFound';
const SPANISH = 'es';

export /*bundle*/
function View({ uri }) {
	const { current: lang } = beyond.languages;
	const Contents = lang === SPANISH ? ContentsESP : ContentsEN;
	const content = uri.vars.get('content');
	const contentId = !content ? DEFAULT_CONTENT : content;

	const replace = (text) => text.replace(text[0], text[0].toUpperCase());
	const name = contentId.split('-').map(replace).join('');

	const Content = Contents[name] || Contents[DEFAULT_CONTENT];

	return (
		<div className="page__container">
			<Content />
		</div>
	);
}
