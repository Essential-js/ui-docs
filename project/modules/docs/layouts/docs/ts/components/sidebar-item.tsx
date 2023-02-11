import * as React from 'react';
import { routing } from '@beyond-js/kernel/routing';

interface Props {
	key: string;
	component: { path: string; name: string };
	open: string;
}

export function SidebarItem({ component, open }: Props) {
	const isOpen = component.name === open;
	const location = `/component/${component.path}`;
	const cls = isOpen ? 'open' : '';

	function redirect(event: { preventDefault: () => void }) {
		event.preventDefault();
		routing.pushState(location);
	}

	return (
		<li className={`sidebar-item ${cls}`}>
			<a onClick={redirect}>{component.name}</a>
		</li>
	);
}
