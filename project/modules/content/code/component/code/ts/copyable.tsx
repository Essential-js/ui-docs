import React, { JSX } from 'react';
import { Copy } from 'iconsax-react';
import { Code } from './index';

interface Props {
	children: JSX.Element | Array<JSX.Element>;
	className: string;
}

export /*bundle*/ function CopyableCode({ children, className }: Partial<Props>) {
	return (
		<div className={`essential__copyable-code ${className}`}>
			<Code>{children}</Code>
			<Copy className="icon" />
		</div>
	);
}
