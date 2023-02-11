import React from 'react';

interface Props extends Partial<HTMLButtonElement> {
	children: React.JSX.Element | Array<React.JSX.Element>;
	after?: any;
	before?: any;
}

export /*bundle*/ function Button({ children, after = null, before = null, ...props }: Props) {
	return (
		<button {...props} className={`essential__button ${props.className}`}>
			{before}
			{children}
			{after}
		</button>
	);
}
