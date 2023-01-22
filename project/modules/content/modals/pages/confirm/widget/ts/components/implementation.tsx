export const implementation = `
function Implementation() {
    const [show, setShow] = React.useState(false);

    function toggleShow() {
        setShow(!show);
    }

    return (
        <>
            <button onClick={toggleShow}>Show modal</button>
            {show && 
                <ConfirmModal title="You did something right!" cancelText="Cancel" confirmText="Confirm" onHide={toggleShow}>
	                This is an example
                </ConfirmModal>
	    }
        </>
    )
}
`;
