import * as React from 'react';
import { Header } from '@essential/ui/header';
import { Overview } from '@essential/ui/overview';
import { CopyableCode } from '@essential/ui/code';
import { Results } from './components/results';
import { implementation } from './components/implementation';

export /*bundle*/
function View({ store }) {
	return (
		<div className="component">
			<Header>Info</Header>
			<section>
				<Overview>The info version of the modal component.</Overview>

				<h5>Results: </h5>
				<Results />
			</section>

			<section className="use">
				<h5>Use: </h5>
				<CopyableCode title="Importation">{`import { InfoModal } from '@essential/ui/modals';`}</CopyableCode>
				<CopyableCode title="random-implementation.tsx">{implementation}</CopyableCode>
			</section>
		</div>
	);
}
