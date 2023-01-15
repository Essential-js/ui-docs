import React from 'react';
import { Copy } from 'iconsax-react';
import { Code } from './index';
import { toast } from '@essential-js/ui/toast';

interface Props {
	className: string;
	children: string;
	title: string;
}

export /*bundle*/ function CopyableCode({ title, children, className, ...props }: Props) {
	function copy() {
		navigator.clipboard.writeText(children);
		toast.info('The code has been copied!');
	}

	return (
		<div className={`essential__copyable-code ${className}`} {...props}>
			{title && (
				<div className="title">
					<h4>{title}</h4>
				</div>
			)}
			<div className="content">
				<Code>{children}</Code>
				<Copy onClick={copy} className="icon" />
			</div>
		</div>
	);
}
