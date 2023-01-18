import React from 'react';
import { Switch } from '@essential-js/ui/form';

export function Results() {
	const [checked, setChecked] = React.useState(false);

	function toggleChecked() {
		setChecked(!checked);
	}

	return (
		<div className="results">
			<Switch onClick={toggleChecked} checked={checked} />
		</div>
	);
}
