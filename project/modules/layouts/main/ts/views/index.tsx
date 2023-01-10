import * as React from 'react';
import { Sidebar } from '../components/index';

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
			<Sidebar />
			<main>
				<beyond-layout-children />
			</main>
		</div>
	);
}
