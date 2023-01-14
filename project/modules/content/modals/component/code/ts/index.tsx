import React, { JSX } from 'react';

export /*bundle*/ function Modal({ children, className, ...props }: Partial<HTMLElement>) {
	return (
		<code className={`essential__code ${className}`} {...props}>
			{children}
		</code>
	);
}
