import React from 'react';
import { routing } from '@beyond-js/kernel/routing';

export interface IComponent {
	name: string;
	key: string;
	path: string;
	active: string | null;
	setActive: React.Dispatch<React.SetStateAction<string | null>>;
}

export function Component({ name, path, active, setActive }: IComponent) {
	function navigate(event: { preventDefault: () => void }) {
		event.preventDefault();
		setActive(path);
		routing.pushState(`/docs/${path}`);
	}

	const activeCls = active === path ? 'active' : '';

	return (
		<li className={`component__item ${activeCls}`}>
			<div className="list-disc"></div>
			<a onClick={navigate}>{name}</a>
		</li>
	);
}
