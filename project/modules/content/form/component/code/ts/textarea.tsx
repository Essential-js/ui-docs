import React from 'react';

interface Props extends Partial<HTMLTextAreaElement> {
	label: string;
	inputClassName?: string;
}

export /*bundle*/ function Textarea({ label, inputClassName, ...props }: Props) {
	return (
		<div className={`essential__textarea ${props.className}`}>
			<textarea id="textarea" {...props} className={inputClassName} />
			<label htmlFor="textarea">{label}</label>
		</div>
	);
}
