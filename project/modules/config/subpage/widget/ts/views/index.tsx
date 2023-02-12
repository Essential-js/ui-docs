import * as React from 'react';
import * as ContentsESP from '@essential-js/ui-docs/esp';
import * as ContentsEN from '@essential-js/ui-docs/en';
import { beyond } from '@beyond-js/kernel/core';

const DEFAULT_CONTENT = 'NotFound';

export /*bundle*/
function View({ uri }) {
	const { current: lang } = beyond.languages;
	const Contents = lang === 'es' ? ContentsESP : ContentsEN;
	const content = uri.vars.get('content');
	const sub = uri.vars.get('sub');
	// Here goes th default place
	const contentId = !sub ? content : `${content}-${sub}`;

	const replace = (text) => text.replace(text[0], text[0].toUpperCase());
	const name = contentId.split('-').map(replace).join('');

	const Content = Contents[name] || Contents[DEFAULT_CONTENT];

	return (
		<div className="page__container">
			<Content />
		</div>
	);
}
