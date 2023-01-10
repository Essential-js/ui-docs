import * as React from 'react';
import { ArrowRight2, ArrowDown2 } from 'iconsax-react';
import { SidebarItem } from './sidebar-item';

const DOWN = 'down';
const RIGHT = 'right';

export function SidebarDropdown({ component }) {
	const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
	const subComponentsElements = component.subComponents.map((subComponent: { path: string; name: string }) => <SidebarItem key={subComponent.path} component={subComponent} />);
	const direction = isDropdownOpen ? DOWN : RIGHT;

	function toggleDropdown(event) {
		event.preventDefault();
		setIsDropdownOpen(!isDropdownOpen);
	}

	const Icon = direction === DOWN ? ArrowDown2 : ArrowRight2;

	return (
		<li className="sidebar-item dropdown">
			<a onClick={toggleDropdown}>
				{component.name}
				<Icon className="icon" />
			</a>
			{isDropdownOpen && <ul className="sub-list">{subComponentsElements}</ul>}
		</li>
	);
}
