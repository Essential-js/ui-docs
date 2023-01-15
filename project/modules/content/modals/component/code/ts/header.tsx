import React, { JSX } from 'react';
import { CloseCircle } from 'iconsax-react';

interface Props extends Partial<HTMLElement> {
	title: string;
	onHide: () => void;
	closeable?: boolean;
	icon?: JSX.Element;
}

export function Header({ title, icon, onHide, className = '', closeable = true, ...props }: Props) {
	const Icon = icon;

	function close() {
		onHide();
	}

	return (
		<header className={`header ${className}`} {...props}>
			<div className="title">
				{icon && <Icon className="icon" />}
				<h2>{title}</h2>
			</div>
			{closeable && (
				<button onClick={close} title="close">
					<CloseCircle className="icon" />
				</button>
			)}
		</header>
	);
}
