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
			<Header>Input</Header>
			<section>
				<Overview>The base input component with slight enhancements for the best user experience</Overview>

				<h5>Results: </h5>
				<Results />
			</section>
			<section className="use">
				<h5>Uso: </h5>
				<CopyableCode title="Importation">{`import { Input } from '@essential-js/ui/form';`}</CopyableCode>
				<CopyableCode title="random-implementation.tsx">{implementation}</CopyableCode>
			</section>
		</div>
	);
}
