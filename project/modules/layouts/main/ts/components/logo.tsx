import React from 'react';
import { routing } from '@beyond-js/kernel/routing';
import { Bag2 } from 'iconsax-react';

export function Logo() {
	function goHome(event) {
		event.preventDefault();
		routing.pushState('/');
	}

	return (
		<h1 className="aside__logo">
			<a onClick={goHome} href="/">
				<Bag2 className="icon" />
				<p>
					Essential <span>UI</span>
				</p>
			</a>
		</h1>
	);
}
