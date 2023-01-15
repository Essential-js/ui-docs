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
                <InfoModal title="Information!" onHide={toggleShow}>
                    This is an example
                </InfoModal>
            }
        </>
    )
}
`;
