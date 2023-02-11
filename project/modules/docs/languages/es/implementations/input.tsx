import React from 'react';
import { ValidateInput } from '@essential-js/ui/form';

const REGEX = /.{5,16}/;
export function ValidateInputImplementation() {
	const [value, setValue] = React.useState('');

	function onChange(event: { target: { value: string } }) {
		const { value } = event.target;
		setValue(value);
	}

	const inputValidation = REGEX.test(value);
	return (
		<div className="results">
			<ValidateInput
				value={value}
				onChange={onChange}
				isOk={inputValidation}
				label="Insert a password"
				type="password"
				errorMessage="The password has to have at least 5 letters"
				successMessage="Ready!"
				placeholder="*****"
			/>
		</div>
	);
}
