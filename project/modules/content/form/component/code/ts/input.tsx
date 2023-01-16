import React from 'react';

interface Props extends Partial<HTMLInputElement> {
	label: string;
	events: any;
}

export /*bundle*/ function Input({ label, ...props }: Props) {
	return (
		<div className="essential__input">
			<input className={props.className} {...props} />
			<label htmlFor={props.id}>{label}</label>
		</div>
	);
}
