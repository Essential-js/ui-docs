import React from 'react';

export /*bundle*/ function Code({ children, className, ...props }: Partial<HTMLElement>) {
	return (
		<code className={`essential__code ${className}`} {...props}>
			{children}
		</code>
	);
}
