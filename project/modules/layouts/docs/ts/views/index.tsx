import * as React from 'react';
import { Sidebar } from '../sidebar/index';
import { Toasts } from '@essential-js/ui/toast';
import { ThirdBlob, FourBlob } from '@essential-js/ui-docs/blobs';

declare global {
	namespace JSX {
		interface IntrinsicElements {
			'beyond-layout-children': any;
		}
	}
}

export function Layout() {
	return (
		<div className="docs__layout">
			<ThirdBlob />
			<Toasts
				position={{
					bottom: '2rem',
					right: '2rem',
				}}
			/>
			<Sidebar />

			<main className="main__content">
				<beyond-layout-children />
			</main>
		</div>
	);
}
