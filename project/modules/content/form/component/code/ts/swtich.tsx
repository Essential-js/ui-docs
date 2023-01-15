import React from 'react';

interface Props extends Partial<HTMLButtonElement> {
	checked: boolean;
}

export /*bundle*/ function Switch({ checked, ...props }: Props) {
	const cls = checked ? 'checked' : 'unchecked';

	return (
		<button className={`essential__switch ${cls} ${props.className}`} {...props}>
			<div className="indicator"></div>
		</button>
	);
}
