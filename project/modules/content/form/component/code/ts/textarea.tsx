import React from 'react';

interface Props extends Partial<HTMLTextAreaElement> {
	label: string;
}

export /*bundle*/ function Textarea({ label, ...props }: Props) {
	return (
		<div className="essential__textarea">
			<textarea id="textarea" {...props} />
			<label htmlFor="textarea">{label}</label>
		</div>
	);
}
