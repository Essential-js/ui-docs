import * as React from 'react';

declare global {
	namespace JSX {
		interface IntrinsicElements {
			'beyond-layout-children': any;
		}
	}
}

export function Layout() {
	return (
		<div className="layout">
			<main>
				<beyond-layout-children />
			</main>
		</div>
	);
}
