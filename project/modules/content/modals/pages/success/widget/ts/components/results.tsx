import React from 'react';
import { Button } from '@essential-js/ui/buttons';
import { SuccessModal } from '@essential-js/ui/modals';

export function Results() {
	const [show, setShow] = React.useState(false);

	function toggleShow() {
		setShow(!show);
	}

	return (
		<div className="results">
			<Button onClick={toggleShow}>Show Modal</Button>
			{show && (
				<SuccessModal title="You did something right! " onHide={toggleShow}>
					This is an example
				</SuccessModal>
			)}
		</div>
	);
}
