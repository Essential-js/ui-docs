import React from 'react';
import { Header } from '@essential-js/ui/header';
import { Overview } from '@essential-js/ui/overview';
import { CopyableCode } from '@essential-js/ui/code';
import { Results } from './components/results';
import { implementation } from './components/implementation';

export /*bundle*/
function View({ store }) {
	return (
		<div className="component">
			<Header>Modal</Header>
			<section>
				<Overview>This component creates a modal that can be used to display additional content or to create an interactive user experience.</Overview>

				<h5>Results: </h5>
				<Results />
			</section>
			<section className="use">
				<h5>Default Modal: </h5>
				<CopyableCode title="Importation">{`import { Modal } from '@essential-js/ui/modals';`}</CopyableCode>
				<CopyableCode title="random-implementation.tsx">{implementation}</CopyableCode>
			</section>
		</div>
	);
}
