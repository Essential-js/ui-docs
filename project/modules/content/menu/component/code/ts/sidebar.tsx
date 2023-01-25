import React from 'react';

import { ArrowSquareRight } from 'iconsax-react';

interface Props extends Partial<HTMLElement> {
	logo?: React.JSX.Element;
	onChange?: (isOpen: boolean) => void;
}

export /*bundle*/ function DropdownSidebar({ onChange, children, logo, ...props }: Props): React.FC {
	const [isOpen, setIsOpen] = React.useState<boolean>(false);
	const sidebarRef = React.useRef(null);
	const cls: string = isOpen ? 'open' : 'closed';
	const title: string = isOpen ? 'close' : 'open';

	function toggleIsOpen() {
		setIsOpen(!isOpen);
		if (onChange) onChange(isOpen);
	}

	const iconProps: { variant?: string } = isOpen ? { variant: 'Bulk' } : {};

	return (
		<aside {...props} ref={sidebarRef} className={`sidebar ${cls}`}>
			<div className="sidebar__header">
				<div className="logo">{logo}</div>
				<button title={title} onClick={toggleIsOpen} className="toggle__btn">
					<ArrowSquareRight {...iconProps} />
				</button>
			</div>
			<nav className="sidebar__nav">
				<ul className="sidebar__list">{children}</ul>
			</nav>
		</aside>
	);
}
