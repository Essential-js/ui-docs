import React from 'react';
import config from '@essential-js/ui/config';
import { Section, ISection } from './section';
import { Logo } from './logo';

interface Props {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Sidebar({ isOpen, setIsOpen }: Props) {
	const sections = config.params.menu.map((section: ISection) => (
		<Section key={section.name} {...section} />
	));

	function close() {
		console.log('CLOSE');
		setIsOpen(false);
	}

	const cls = isOpen ? 'open' : '';

	return (
		<div onClick={close} className={`sidebar__container ${cls}`}>
			<aside className="docs__sidebar">
				<div className="content">
					<Logo />

					<nav>
						<h3>Documentation</h3>
						<ul>{sections}</ul>
					</nav>
				</div>
			</aside>
		</div>
	);
}
