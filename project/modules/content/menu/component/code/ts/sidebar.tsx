import React from 'react';

import { ArrowSquareRight } from 'iconsax-react';

interface Props extends Partial<HTMLElement> {
	logo?: React.JSX.Element;
	onChange?: (isOpen: boolean) => void;
	width: number;
	setWidth: React.Dispatch<React.SetStateAction<number>>;
}

export /*bundle*/ function DropdownSidebar({ width, setWidth, onChange, children, logo, ...props }: Props): React.FC {
	const [isOpen, setIsOpen] = React.useState<boolean>(false);
	const sidebarRef = React.useRef(null);
	const cls: string = isOpen ? 'open' : 'closed';
	const title: string = isOpen ? 'close' : 'open';

	React.useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	function toggleIsOpen() {
		setIsOpen(!isOpen);
		if (onChange) onChange(isOpen);
	}

	function handleResize() {
		console.log('SIDEBARREF => ', sidebarRef);
		//setWidth(sidebarRef.current?.getBoundingClientRect().width || 0);
	}

	const iconProps: { variant?: string } = isOpen ? { variant: 'Bulk' } : {};
	const style = { width, ...props.style };

	return (
		<aside
			data-kt-scroll="true"
			data-kt-scroll-activate="{default: false, lg: true}"
			data-kt-scroll-height="auto"
			data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
			data-kt-scroll-wrappers="#kt_aside_menu"
			data-kt-scroll-offset="0"
			ref={sidebarRef}
			className={`sidebar ${cls}`}
			style={style}
			{...props}>
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
