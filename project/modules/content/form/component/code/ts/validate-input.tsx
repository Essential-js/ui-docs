import React from 'react';
import { Input } from './input';

interface Props extends Partial<HTMLInputElement> {
	label: string;
	message: string;
	isOk: boolean;
}

export /*bundle*/ function ValidateInput({ isOk, label, message, ...props }: Props) {
	const cls = !isOk ? 'wrong' : 'ok';

	return (
		<div className={`essential__validate-input ${cls}`}>
			<Input label={label} {...props} />
			<span className="error-message">{message}</span>
		</div>
	);
}
