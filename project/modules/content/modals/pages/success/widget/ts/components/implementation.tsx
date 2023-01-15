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
                <SuccessModal title="You did something right!" onHide={toggleShow}>
                    This is an example
                </SuccessModal>
            }
        </>
    )
}
`;
