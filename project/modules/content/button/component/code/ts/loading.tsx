import React, { JSX } from 'react';
import { ArrowRotateRight } from 'iconsax-react';
import { Button } from './index';

interface Props extends Partial<HTMLButtonElement> {
	icon: string | JSX.Element;
}

export /*bundle*/ function LoadingButton({ icon, ...props }: Props) {
	icon = icon || <ArrowRotateRight />;

	return (
		<Button className={`${props.className} loading`} {...props}>
			<div className="icon">{icon}</div>
		</Button>
	);
}
