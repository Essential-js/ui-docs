import React from 'react';

interface Props extends Partial<HTMLElement> {
	breakpoint?: number;
}

export /*bundle*/ function Card({ children, ...props }: Props) {
	return (
		<article {...props} className={`essential__card ${props.className}`}>
			{children}
		</article>
	);
}
