import React from 'react';
import { Button } from '@essential-js/ui/buttons';
import { CopyableCode } from '@essential-js/ui/code';
import { routing } from '@beyond-js/kernel/routing';
import { motion } from 'framer-motion';

const TITLE = 'Reusable, Useful, Futuristic';

export function Header() {
	function goDocs() {
		routing.pushState('/docs/buttons');
	}

	const titleItems = TITLE.split('').map((letter: string, index: number) => (
		<motion.span
			transition={{ duration: 0.2, delay: index * 0.1 }}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}>
			{letter}
		</motion.span>
	));

	return (
		<header className="home__header">
			<div className="home__header-main-content">
				<motion.h1
					animate={{ y: 0, opacity: 1 }}
					initial={{ y: 20, opacity: 0 }}
					transition={{ duration: 0.5 }}>
					{titleItems}
				</motion.h1>
				<p>
					Save yourself and your team time by using Essential-UI's pre-designed, fully
					customizable and editable components.
				</p>
			</div>

			<div className="started">
				<motion.div
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}>
					<CopyableCode>npm i @essential-js/ui</CopyableCode>
				</motion.div>
				<motion.div
					className="button__container"
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}>
					<Button onClick={goDocs} className="default alter-bordered">
						Get Started
					</Button>
				</motion.div>
			</div>
		</header>
	);
}
