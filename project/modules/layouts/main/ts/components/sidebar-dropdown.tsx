import * as React from 'react';
import { ArrowRight2, ArrowDown2 } from 'iconsax-react';
import { SidebarItem } from './sidebar-item';
import { routing } from '@beyond-js/kernel/routing';

interface IComponent {
	name: string;
	path: string;
}

interface IDComponent extends IComponent {
	subComponents: Array<IComponent>;
}
interface Props {
	key: string;
	component: IDComponent;
	open: string;
	setOpen: React.Dispatch<React.SetStateAction<string>>;
}

const DOWN = 'down';
const RIGHT = 'right';

export function SidebarDropdown({ component, open, setOpen }: Props) {
	const subComponentsElements = component.subComponents.map((subComponent: { path: string; name: string }) => <SidebarItem key={subComponent.path} component={subComponent} open={open} setOpen={setOpen} />);
	const direction = component.name === open ? DOWN : RIGHT;
	const location = `/component/${component.path}`;
	const cls = component.name === open ? 'open' : '';

	function toggleDropdown(event) {
		event.preventDefault();
		setOpen(component.name);
		routing.pushState(location);
	}

	const Icon = direction === DOWN ? ArrowDown2 : ArrowRight2;

	return (
		<li className={`sidebar-item dropdown ${cls}`}>
			<a onClick={toggleDropdown}>
				{component.name}
				<Icon className="icon" />
			</a>
			{component.name === open && <ul className="sub-list">{subComponentsElements}</ul>}
		</li>
	);
}
