import * as React from 'react';
import { Toasts } from '@essential-js/ui/toast';
import { FirstBlob, SecondBlob, FourBlob } from '@essential-js/ui/blobs';

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
			<Toasts
				position={{
					bottom: '2rem',
					right: '2rem',
				}}
			/>
			<FourBlob />
			<FirstBlob />
			<SecondBlob />

			<main className="home__main-layout">
				<beyond-layout-children />
			</main>
		</div>
	);
}
