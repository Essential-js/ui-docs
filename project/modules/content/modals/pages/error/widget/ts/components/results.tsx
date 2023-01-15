import React from 'react';
import { Button } from '@essential-js/ui/buttons';
import { ErrorModal } from '@essential-js/ui/modals';

export function Results() {
	const [show, setShow] = React.useState(false);

	function toggleShow() {
		setShow(!show);
	}

	return (
		<div className="results">
			<Button onClick={toggleShow}>Show error modal</Button>
			{show && (
				<ErrorModal title="Something went wrong" onHide={toggleShow}>
					This is an example
				</ErrorModal>
			)}
		</div>
	);
}
