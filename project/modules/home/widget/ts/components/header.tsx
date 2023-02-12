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
				<h1>
					Make the <span className="accent-mark">application of tomorrow</span> with the
					components of the <span className="accent-mark">future</span>
				</h1>
				<p>
					Save yourself and your team time by using{' '}
					<span className="accent-mark">Essential-UI's</span> pre-designed, fully
					customizable and editable components, with a default theme that will make your{' '}
					<span className="accent-mark">applications look like never before.</span>
				</p>
			</div>

			<div className="started">
				<Button onClick={goDocs} className="info">
					Get Started
				</Button>
				<CopyableCode>npm i @essential-js/ui</CopyableCode>
			</div>
		</header>
	);
}
