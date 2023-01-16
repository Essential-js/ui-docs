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
			<Header>Controller</Header>
			<section>
				<Overview>Form controller for creating form structures, supports any type of property for the different types of inputs and allows to set custom components.</Overview>

				<h5>Results: </h5>
				<Results />
			</section>
			<section className="use">
				<h5>Use: </h5>
				<CopyableCode title="Importation">{`import { Controller, formController } from '@essential-js/ui/form';`}</CopyableCode>
				<CopyableCode title="random-implementation.tsx">{implementation}</CopyableCode>
			</section>
		</div>
	);
}
