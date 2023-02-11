import React from 'react';
import { Input } from './input';

interface Props extends Partial<HTMLInputElement> {
	label: string;
	errorMessage: string;
	successMessage: string;
	isOk: boolean;
	inputClassName: string;
}

export /*bundle*/ function ValidateInput({
	isOk,
	label,
	errorMessage,
	successMessage,
	inputClassName,
	...props
}: Props) {
	const displayMessage = props.value;
	const cls = !isOk ? 'wrong' : 'ok';
	const messageCls = !isOk ? 'error' : 'success';
	const messageToDisplay = isOk ? successMessage : errorMessage;
	const displayMessageCls = displayMessage ? 'display-message' : '';

	return (
		<div className={`essential__validate-input ${cls} ${displayMessageCls}`}>
			<Input {...props} inputClassName={inputClassName} label={label} />
			<span className={`message ${messageCls}`}>{messageToDisplay}</span>
		</div>
	);
}
