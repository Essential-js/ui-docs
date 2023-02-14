import React from 'react';
import { routing } from '@beyond-js/kernel/routing';
import { motion } from 'framer-motion';

const TITLE = 'Essential-UI';

export function Logo() {
	function goHome() {
		routing.pushState('/');
	}

	const titleItems = TITLE.split('').map((letter, index: number) => (
		<motion.span
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: index * 0.1 }}
			key={letter}>
			{letter}
		</motion.span>
	));

	return (
		<header className="logo-container">
			<h1 onClick={goHome} className="logo">
				<span>{titleItems}</span>{' '}
				<motion.span
					className="beta-indicator"
					initial={{
						scale: 0.5,
						opacity: 0,
						transition: { delay: 1, ease: 'easeOut' },
					}}
					animate={{ scale: [0.5, 1.4, 1], opacity: 1 }}
					transition={{ duration: 0.2, delay: 0.1 }}>
					Beta
				</motion.span>
			</h1>
		</header>
	);
}
