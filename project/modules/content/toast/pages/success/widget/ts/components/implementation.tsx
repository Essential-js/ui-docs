export const implementation = `
function Implementation() {
    function handleClick() {
        toast.success('Something went right');
    }

    return (
        <button onClick={handleClick}>Show success toast</button>
    )
}
`;
