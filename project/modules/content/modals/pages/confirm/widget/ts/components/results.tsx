import React from 'react';
import { Button } from '@essential-js/ui/buttons';
import { ConfirmModal } from '@essential-js/ui/modals';

export function Results() {
	const [show, setShow] = React.useState(false);

	function toggleShow() {
		setShow(!show);
	}

	return (
		<div className="results">
			<Button onClick={toggleShow}>Show Modal</Button>
			{show && (
				<ConfirmModal title="You did something right!" cancelText="Cancel" confirmText="Confirm" onHide={toggleShow}>
					This is an example
				</ConfirmModal>
			)}
		</div>
	);
}
