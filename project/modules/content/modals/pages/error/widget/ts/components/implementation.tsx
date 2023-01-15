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
                <ErrorModal title="Something went wrong" onHide={toggleShow}>
                    This is an example
                </ErrorModal>
            }
        </>
    )
}
`;
