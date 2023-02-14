import React from 'react';
import { widgets } from '@beyond-js/widgets/render';
import { Moon, Sun1 } from 'iconsax-react';

const themeKey = 'theme';
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

export function ThemeToggler() {
	const [currentTheme, setCurrentTheme] = React.useState(localStorage.getItem(themeKey));

	React.useEffect(() => {
		const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
			? DARK_THEME
			: LIGHT_THEME;
		const userTheme = window?.localStorage.getItem(themeKey);
		if (!userTheme) {
			window?.localStorage.setItem(themeKey, defaultTheme);
		}
		setTheme(window?.localStorage.getItem(themeKey));
		setCurrentTheme(window?.localStorage.getItem(themeKey));
	}, []);

	function setTheme(theme: string) {
		const container = document.querySelector('html');
		container.setAttribute('data-beyond-mode', theme);
		widgets.attributes.add('data-beyond-mode', theme);
		setCurrentTheme(theme);
	}

	function toggleTheme(event) {
		event.preventDefault();
		const theme = localStorage.getItem(themeKey) === DARK_THEME ? LIGHT_THEME : DARK_THEME;
		localStorage.setItem(themeKey, theme);
		setTheme(theme);
		setCurrentTheme(theme);
	}

	const Icon = currentTheme === DARK_THEME ? Moon : Sun1;

	return (
		<button
			className="theme-toggler"
			onClick={toggleTheme}
			title="Toggles light & dark"
			aria-label="auto"
			aria-live="polite">
			<Icon className="header__icon" />
		</button>
	);
}
