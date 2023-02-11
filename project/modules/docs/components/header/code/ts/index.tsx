import React from 'react';

interface Props extends Partial<HTMLElement> {
	pretitle: string;
	title: string;
}

export /*bundle*/ function Header({ pretitle, title, children }: Props) {
	return (
		<header className="header">
			<h2>{pretitle}</h2>
			<h1>{title}</h1>
			{children}
		</header>
	);
}
