import React from 'react';

interface Props extends Partial<HTMLTableElement> {
	breakpoint?: number;
}

export /*bundle*/ function Table({ breakpoint = 750, children, ...props }: Props) {
	const breakpointClass = `breakpoint-${breakpoint}px`;

	const styles = { boxLines: breakpoint, ...props.style };
	return (
		<table {...props} style={styles} className={`essential__table ${props.className} ${breakpointClass}`}>
			{children}
		</table>
	);
}
