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
			<Header>Textarea</Header>
			<section>
				<Overview>Ready-to-use and easy to implement textarea component</Overview>
				<h5>Results: </h5>
				<Results />
			</section>
			<section>
				<h5>Use: </h5>
				<CopyableCode title="Importation">{`import { Textarea } from '@essential-js/ui/form';`}</CopyableCode>
				<CopyableCode title="random-implementation.tsx">{implementation}</CopyableCode>
			</section>
		</div>
	);
}
