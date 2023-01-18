import { ArrowSquareRight } from 'iconsax-react';
import React from 'react';

export /*bundle*/ function DropdownSidebar({ children }: Partial<HTMLElement>) {
	const [isOpen, setIsOpen] = React.useState(false);
	const cls = isOpen ? 'open' : 'closed';
	const title = isOpen ? 'close' : 'open';

	function toggleIsOpen() {
		setIsOpen(!isOpen);
	}

	const iconProps = isOpen ? { variant: 'Bulk' } : {};

	return (
		<aside className={`sidebar ${cls}`}>
			<button title={title} onClick={toggleIsOpen}>
				<ArrowSquareRight {...iconProps} />
			</button>
			{children}
		</aside>
	);
}
