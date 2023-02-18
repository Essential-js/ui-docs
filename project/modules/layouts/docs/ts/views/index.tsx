import * as React from 'react';
import { Sidebar } from '../sidebar/index';
import { Header } from '../header';

declare global {
	namespace JSX {
		interface IntrinsicElements {
			'beyond-layout-children': any;
		}
	}
}

export function Layout() {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<div className="docs__layout">
			<div className="sub__layout">
				<div className="infra__layout">
					<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

					<main className="main__content">
						<Header setIsOpen={setIsOpen} />
						<div className="docs">
							<beyond-layout-children />
						</div>
					</main>
				</div>
			</div>
		</div>
	);
}
