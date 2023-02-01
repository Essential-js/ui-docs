import React from 'react';

interface Props extends Partial<HTMLButtonElement> {
	children: React.JSX.Element | Array<React.JSX.Element>;
	showIcon?: boolean;
	icon: any;
}

export /*bundle*/ function Button({ children, showIcon, icon, ...props }: Props) {
	return (
		<button {...props} className={`essential__button ${props.className}`}>
			{showIcon && icon}
			{children}
		</button>
	);
}
