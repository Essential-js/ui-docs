import React from 'react';
import { routing } from '@beyond-js/kernel/routing';

export function Logo() {
	function goHome() {
		routing.pushState('/');
	}

	return (
		<header className="logo-container">
			<h1 onClick={goHome} className="logo">
				Essential-UI <span className="beta-indicator">Beta</span>
			</h1>
		</header>
	);
}
