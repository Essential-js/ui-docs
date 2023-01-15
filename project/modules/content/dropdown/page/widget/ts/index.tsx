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
			<Header>Dropdown</Header>
			<section>
				<Overview>A perfect dropdown component for dropdown sections ready for implementation</Overview>
				<h5>Results: </h5>
				<Results />
			</section>
			<section className="use">
				<CopyableCode title="Importation">{`import { Dropdown } from '@essential-js/ui/dropdown';`}</CopyableCode>
				<CopyableCode title="random-implementation.tsx">{implementation}</CopyableCode>
			</section>
		</div>
	);
}
