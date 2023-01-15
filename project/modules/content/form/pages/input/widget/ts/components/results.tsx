import React from 'react';
import { ValidateInput } from '@essential-js/ui/form';

const ERROR_MESSAGE = 'Error, value is too short';
const REGEX = /.{5,16}/;
export function Results() {
	const [value, setValue] = React.useState('');

	function onChange(event: { target: { value: string } }) {
		const { value } = event.target;
		setValue(value);
	}

	const isOk = REGEX.test(value);
	return (
		<div className="results">
			<ValidateInput value={value} isOk={isOk} message={ERROR_MESSAGE} onChange={onChange} placeholder="Software Enginner" label="Work" />
		</div>
	);
}
