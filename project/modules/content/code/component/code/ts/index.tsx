import React, { JSX } from 'react';

interface Props {
	children: JSX.Element | Array<JSX.Element>;
	className: string;
}

export /*bundle*/ function Code({ children, className }: Partial<Props>) {
	return <code className={`essential__code ${className}`}>{children}</code>;
}
