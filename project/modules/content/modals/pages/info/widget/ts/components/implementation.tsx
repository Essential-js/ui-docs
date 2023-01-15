export const implementation = `
function Implementation() {
    function handleClick() {
        toast.info('Here goes the information that you want to display');
    }

    return (
        <button onClick={handleClick}>Show info toast</button>
    )
}
`;
