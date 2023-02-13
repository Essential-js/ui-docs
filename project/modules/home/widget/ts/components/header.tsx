import React from 'react';
import { Button } from '@essential-js/ui/buttons';
import { CopyableCode } from '@essential-js/ui/code';
import { routing } from '@beyond-js/kernel/routing';

export function Header() {
	function goDocs() {
		routing.pushState('/docs/buttons');
	}

	return (
		<header className="home__header">
			<div className="home__header-main-content">
				<h1>Reusable Useful Futuristic</h1>
				<p>
					Save yourself and your team time by using Essential-UI's pre-designed, fully
					customizable and editable components.
				</p>
			</div>

			<div className="started">
				<CopyableCode>npm i @essential-js/ui</CopyableCode>
				<Button onClick={goDocs} className="default alter-bordered">
					Get Started
				</Button>
			</div>
		</header>
	);
}
