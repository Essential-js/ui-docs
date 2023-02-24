import React from 'react';
import config from '@essential-js/ui-docs/config';
import { Section, ISection } from './section';
import { Logo } from './logo';
import { Component } from './component';

interface Props {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Sidebar({ isOpen, setIsOpen }: Props) {
	const sections = config.params.menu.map((section: ISection, index: number) => (
		<Section key={section.name} index={index} {...section} />
	));

	function close() {
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
