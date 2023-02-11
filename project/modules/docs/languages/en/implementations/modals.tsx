import React from 'react';
import { Button } from '@essential-js/ui/buttons';
import { ConfirmModal, ErrorModal, InfoModal, Modal, SuccessModal } from '@essential-js/ui/modals';

export function ConfirmModalImplementation() {
	const [displayModal, setDisplayModal] = React.useState(false);

	function toggleHide() {
		setDisplayModal(!displayModal);
	}

	function handleConfirm() {
		setDisplayModal(!displayModal);
	}

	function handleCancel() {
		setDisplayModal(!displayModal);
	}

	return (
		<>
			<Button className="success" onClick={toggleHide}>
				Display Confirm Modal
			</Button>
			{displayModal && (
				<ConfirmModal cancelText="Cancel" confirmText="Confirm" onConfirm={handleConfirm} onCancel={handleCancel} title="Please confirm to continue" onHide={toggleHide}>
					This is the basic implementation of modal confirm
				</ConfirmModal>
			)}
		</>
	);
}

export function ErrorModalImplementation() {
	const [displayModal, setDisplayModal] = React.useState(false);

	function toggleHide() {
		setDisplayModal(!displayModal);
	}

	return (
		<>
			<Button className="error" onClick={toggleHide}>
				Display Error Modal
			</Button>
			{displayModal && (
				<ErrorModal title="Error!" onHide={toggleHide}>
					This is the basic implementation of modal error
				</ErrorModal>
			)}
		</>
	);
}

export function InfoModalImplementation() {
	const [displayModal, setDisplayModal] = React.useState(false);

	function toggleHide() {
		setDisplayModal(!displayModal);
	}

	return (
		<>
			<Button className="info" onClick={toggleHide}>
				Display info Modal
			</Button>
			{displayModal && (
				<InfoModal title="Lets imagine theres a awesome information!" onHide={toggleHide}>
					This is the basic implementation of modal info
				</InfoModal>
			)}
		</>
	);
}

export function SuccessModalImplementation() {
	const [displayModal, setDisplayModal] = React.useState(false);

	function toggleHide() {
		setDisplayModal(!displayModal);
	}

	return (
		<>
			<Button className="success" onClick={toggleHide}>
				Display success Modal
			</Button>
			{displayModal && (
				<SuccessModal title="Success!" onHide={toggleHide}>
					This is the basic implementation of modal success
				</SuccessModal>
			)}
		</>
	);
}

export function ModalImplementation() {
	const [displayModal, setDisplayModal] = React.useState(false);

	function toggleHide() {
		setDisplayModal(!displayModal);
	}

	return (
		<>
			<Button className="info" onClick={toggleHide}>
				Display success Modal
			</Button>
			{displayModal && <Modal onHide={toggleHide}>This is a regular modal implementation</Modal>}
		</>
	);
}
