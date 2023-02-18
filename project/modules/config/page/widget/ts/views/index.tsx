import * as React from 'react';
import * as ContentsEN from '@essential-js/ui-docs/en';
import { Toasts } from '@essential-js/ui/toast';
import { motion } from 'framer-motion';

const DEFAULT_CONTENT = 'NotFound';

export /*bundle*/
function View({ uri }) {
	const content = uri.vars.get('content');
	const contentId = !content ? DEFAULT_CONTENT : content;

	const replace = (text) => text.replace(text[0], text[0].toUpperCase());
	const name = contentId.split('-').map(replace).join('');

	const Content = ContentsEN[name] || ContentsEN[DEFAULT_CONTENT];

	return (
		<>
			<Toasts
				position={{
					bottom: '2rem',
					right: '2rem',
				}}
			/>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				className="page__container">
				<Content />
			</motion.div>
		</>
	);
}
