import React from 'react';
import { Header } from './header';
import { Modal } from './index';
import { InfoCircle } from 'iconsax-react';
import { Button } from '@essential-js/ui/buttons';

interface Props extends Partial<HTMLElement> {
	title: string;
	onHide: () => void;
	onConfirm: () => void;
	onCancel: () => void;
	cancelText: string;
	confirmText: string;
}

export /*bundle*/ function ConfirmModal({ children, title, onConfirm, onCancel, cancelText, confirmText, onHide }: Props) {
	return (
		<Modal className="confirm__modal confirm" onHide={onHide}>
			<Header icon={InfoCircle} className="confirm-header" title={title} onHide={onHide} />
			<div className="content">{children}</div>
			<footer className="actions">
				<Button onClick={onCancel} className="cancel">
					<span>{cancelText}</span>
				</Button>
				<Button onClick={onConfirm} className="confirm">
					<span>{confirmText}</span>
				</Button>
			</footer>
		</Modal>
	);
}
