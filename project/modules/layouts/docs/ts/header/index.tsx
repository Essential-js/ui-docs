import { HambergerMenu } from 'iconsax-react';
import React from 'react';
import { ThemeToggler } from './theme-toggler';
import { Fork } from './fork';
import { Connect } from './connect';

interface Props {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Header({ setIsOpen }: Props) {
	function toggleSidebar() {
		setIsOpen((currentValue: boolean) => !currentValue);
	}

	return (
		<header className="docs__header">
			<HambergerMenu onClick={toggleSidebar} className="sidebar-toggler" />
			<div className="right">
				<ThemeToggler />
				<Connect />
				<Fork />
			</div>
		</header>
	);
}
