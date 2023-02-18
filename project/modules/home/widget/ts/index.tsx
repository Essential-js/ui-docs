import * as React from 'react';
import { Toasts } from '@essential-js/ui/toast';
import { Header } from './components/header';
import { Footer } from './components/footer';

export /*bundle*/
function View({ store }) {
	return (
		<main className="home__page">
			<Header />
			<Footer />

			<Toasts
				position={{
					bottom: '2rem',
					right: '2rem',
				}}
			/>
		</main>
	);
}
