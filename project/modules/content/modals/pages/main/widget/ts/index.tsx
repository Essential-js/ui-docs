import React from 'react';
import { Header } from '@essential/ui/header';
import { Overview } from '@essential/ui/overview';
import { CopyableCode } from '@essential/ui/code';
import { Results } from './components/results';
import { implementation } from './components/implementation';

export /*bundle*/
function View({ store }) {
	return (
		<div className="component">
			<Header>Modal</Header>
			<section>
				<Overview>Ready-to-use modal components and absolute customization</Overview>

				<h5>Results: </h5>
				<Results />
			</section>
			<section className="use">
				<h5>Default Modal: </h5>
				<CopyableCode title="Importation">{`import { Modal } from '@essential/ui/modals';`}</CopyableCode>
				<CopyableCode title="random-implementation.tsx">{implementation}</CopyableCode>
			</section>
		</div>
	);
}
