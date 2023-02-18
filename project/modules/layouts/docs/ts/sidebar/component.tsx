import React from 'react';
import { routing } from '@beyond-js/kernel/routing';
import { motion } from 'framer-motion';

export interface IComponent {
	name: string;
	key: string;
	path: string;
	active: string | null;
	setActive: React.Dispatch<React.SetStateAction<string | null>>;
	index: number;
}

export function Component({ name, path, active, setActive, index }: IComponent) {
	function navigate(event: { preventDefault: () => void }) {
		event.preventDefault();
		setActive(path);
		routing.pushState(`/docs/${path}`);
	}

	const activeCls = active === path ? 'active' : '';

	return (
		<motion.li
			initial={{ x: -20, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ type: 'easeInOut', delay: index * 0.1, duration: 0.4 }}
			className={`component__item ${activeCls}`}>
			<div className="list-disc"></div>
			<a onClick={navigate}>{name}</a>
		</motion.li>
	);
}
