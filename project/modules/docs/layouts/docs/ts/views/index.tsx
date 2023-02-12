import * as React from 'react';
import { Sidebar } from '../sidebar/index';
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
			<main className="main__contant">
				<Toasts
					position={{
						bottom: '2rem',
						right: '2rem',
					}}
				/>
				<beyond-layout-children />
			</main>
		</div>
	);
}
