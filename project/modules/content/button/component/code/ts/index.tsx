import React from 'react';

export /*bundle*/ function Button({ children, ...props }: Partial<HTMLButtonElement>) {
	return (
		<button className={`essential__button ${props.className}`} {...props}>
			{children}
		</button>
	);
}
