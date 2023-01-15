import * as React from 'react';
import { Header } from '@essential-js/ui/header';
import { Overview } from '@essential-js/ui/overview';
import { CopyableCode } from '@essential-js/ui/code';
import { Results } from './components/results';
import { implementation } from './components/implementation';

export /*bundle*/
function View({ store }) {
	return (
		<div className="component">
			<Header>Error</Header>
			<section>
				<Overview>The error version of the toast component.</Overview>

				<h5>Results: </h5>
				<Results />
			</section>
			<section className="use">
				<h5>Uso: </h5>
				<CopyableCode title="Importation">{`import { toast } from '@essential-js/ui/toast';`}</CopyableCode>
				<CopyableCode title="random-implementation.tsx">{implementation}</CopyableCode>
			</section>
		</div>
	);
}
