import * as React from 'react';
import { components } from '../components';
import { SidebarDropdown } from './sidebar-dropdown';
import { SidebarItem } from './sidebar-item';
import { Logo } from './logo';

interface IComponent {
	name: string;
	path: string;
	subComponents?: Array<{ name: string; path: string }>;
}

export function Sidebar() {
	const componentsElements = components.map((component: IComponent) => {
		if (component?.subComponents.length > 0) {
			return <SidebarDropdown key={component.path} component={component} />;
		}

		return <SidebarItem key={component.path} component={component} />;
	});

	return (
		<aside className="aside">
			<Logo />
			<nav role="navigation">
				<ul>{componentsElements}</ul>
			</nav>
		</aside>
	);
}
