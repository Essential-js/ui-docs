import React from 'react';
import config from '@essential-js/ui/config';
import { Section, ISection } from './section';
import { Logo } from './logo';

export function Sidebar() {
	const sections = config.params.menu.map((section: ISection) => (
		<Section key={section.name} {...section} />
	));

	return (
		<aside className="docs__sidebar">
			<div className="content">
				<Logo />

				<nav>
					<h3>Documentation</h3>
					<ul>{sections}</ul>
				</nav>
			</div>
		</aside>
	);
}
