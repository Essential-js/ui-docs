import * as React from 'react';
import { Header } from '@essential-js/ui/header';
import { Overview } from '@essential-js/ui/overview';
import { CopyableCode } from '@essential-js/ui/code';
import { Results } from './components/results';
import { config, implementation } from './components/implementation';

export /*bundle*/
function View({ store }) {
	return (
		<div className="component">
			<Header>Toast</Header>
			<section>
				<Overview>Production-ready toast component with a simple API and only one component to configure, context-free and customizable.</Overview>

				<h5>Results: </h5>
				<Results />
			</section>
			<section className="config">
				<h5>Configuration: </h5>
				<CopyableCode title="Importation">{`import { Toasts } from '@essential-js/ui/toast';`}</CopyableCode>
				<CopyableCode title="any-module.tsx">{config}</CopyableCode>
			</section>

			<section className="use">
				<h5>Use: </h5>
				<CopyableCode title="Importation">{`import { toast } from '@essential-js/ui/toast';`}</CopyableCode>
				<CopyableCode title="random-implementation.tsx">{implementation}</CopyableCode>
			</section>
		</div>
	);
}
