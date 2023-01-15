import React from 'react';
import { Button } from '@essential/ui/buttons';
import { Modal } from '@essential/ui/modals';

export function Results() {
	const [show, setShow] = React.useState(false);

	function toggleShow() {
		setShow(!show);
	}

	return (
		<div className="results">
			<Button onClick={toggleShow}>Show Modal</Button>
			{show && <Modal onHide={toggleShow}>This is an example</Modal>}
		</div>
	);
}
