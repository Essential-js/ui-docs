import * as React from 'react';
import { Sidebar } from '../components/index';
import { Toasts } from '@essential-js/ui/toast';

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
				<Toasts
					position={{
						bottom: '2rem',
						right: '2rem',
					}}
				/>
			</main>
		</div>
	);
}
