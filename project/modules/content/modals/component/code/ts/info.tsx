import React from 'react';
import { InfoCircle } from 'iconsax-react';
import { Modal } from './index';
import { Header } from './header';

interface Props extends Partial<HTMLElement> {
	title: string;
	onHide: () => void;
}

export /*bundle*/ function InfoModal({ children, title, onHide }: Props) {
	return (
		<Modal className="info" onHide={onHide}>
			<Header icon={InfoCircle} className="info-header" title={title} onHide={onHide} />
			<div className="content">{children}</div>
		</Modal>
	);
}
