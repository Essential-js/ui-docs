import * as React from 'react';
import { Header } from '@essential-js/ui/header';
import { Overview } from '@essential-js/ui/overview';
import { CopyableCode } from '@essential-js/ui/code';
import { Results } from './components/results';
import { PasswordResults } from './components/password-results';
import { implementation, passwordImplementation } from './components/implementation';

export /*bundle*/
function View({ store }) {
	return (
		<div className="component">
			<Header>Validate Input</Header>
			<section>
				<Overview>The validate version of the input component.</Overview>
			</section>

			<section className="use">
				<h5>Use: </h5>
				<CopyableCode title="Importation">{`import { ValidateInput } from '@essential-js/ui/form';`}</CopyableCode>
				<CopyableCode title="random-implementation.tsx">{implementation}</CopyableCode>

				<h5>Results: </h5>
				<Results />
			</section>

			<section>
				<CopyableCode title="password-implementation.tsx">{passwordImplementation}</CopyableCode>
				<h5>Results:</h5>
				<PasswordResults />
			</section>
		</div>
	);
}
