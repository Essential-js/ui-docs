import React from 'react';
import { ValidateInput } from '@essential-js/ui/form';

const REGEX = /.{5,16}/;
export function Results() {
	const [value, setValue] = React.useState('');

	function onChange(event: { target: { value: string } }) {
		const { value } = event.target;
		setValue(value);
	}

	const inputValidation = REGEX.test(value);
	return (
		<div className="results">
			<ValidateInput value={value} onChange={onChange} isOk={inputValidation} label="Testing mfucker" message="This is the wrong answer" placeholder="Test test" />
		</div>
	);
}
