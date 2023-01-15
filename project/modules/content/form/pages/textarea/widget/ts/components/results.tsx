import React from 'react';
import { Textarea } from '@essential-js/ui/form';

export function Results() {
	const [value, setValue] = React.useState('');

	function handleChange(event: { target: { value: string } }) {
		const { value } = event.target;
		setValue(value);
	}

	return (
		<div className="results">
			<Textarea placeholder="Insert your comments" label="Comment" value={value} onChange={handleChange} />
		</div>
	);
}
