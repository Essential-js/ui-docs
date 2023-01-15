import React from 'react';
import { InfoCircle } from 'iconsax-react';
import { Modal } from './index';
import { Header } from './header';

interface Props extends Partial<HTMLElement> {
	title: string;
	onHide: () => void;
}

export /*bundle*/ function ErrorModal({ children, title, onHide }: Props) {
	return (
		<Modal className="error" onHide={onHide}>
			<Header icon={InfoCircle} className="error-header" title={title} onHide={onHide} />
			<div className="content">{children}</div>
		</Modal>
	);
}
