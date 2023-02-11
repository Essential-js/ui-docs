import * as React from 'react';
import { DropdownSidebar } from '@essential-js/ui/menu';
import config from '@essential-js/ui/config';
import { SidebarDropdown } from './sidebar-dropdown';
import { SidebarItem } from './sidebar-item';
import { Logo } from './logo';

interface IComponent {
	name: string;
	path: string;
	subComponents?: Array<{ name: string; path: string }>;
}

export function Sidebar() {
	const [open, setOpen] = React.useState<null | string>(null);

	const componentsElements = config.params.menu.map((component: IComponent) => {
		if (component?.subComponents.length > 0) {
			return <SidebarDropdown key={component.path} component={component} open={open} setOpen={setOpen} />;
		}

		return <SidebarItem key={component.path} component={component} open={open} />;
	});

	return <DropdownSidebar logo={<Logo />}>{componentsElements}</DropdownSidebar>;
}
