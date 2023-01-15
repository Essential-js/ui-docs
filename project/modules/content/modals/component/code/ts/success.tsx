import React from 'react';
import { TickCircle } from 'iconsax-react';
import { Modal } from './index';
import { Header } from './header';

interface Props extends Partial<HTMLElement> {
	title: string;
	onHide: () => void;
}

export /*bundle*/ function SuccessModal({ children, title, onHide }: Props) {
	return (
		<Modal className="success" onHide={onHide}>
			<Header icon={TickCircle} className="success-header" title={title} onHide={onHide} />
			<div className="content">{children}</div>
		</Modal>
	);
}
