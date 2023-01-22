import React from 'react';

interface Props extends Partial<HTMLButtonElement> {
	children: React.JSX.Element | Array<React.JSX.Element>;
}

export /*bundle*/ function Button({ children, ...props }: Props) {
	return (
		<button {...props} className={`essential__button ${props.className}`}>
			{children}
		</button>
	);
}
