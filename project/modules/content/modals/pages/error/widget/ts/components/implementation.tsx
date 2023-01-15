export const implementation = `
function Implementation() {
    function handleClick() {
        toast.error('Something went wrong');
    }

    return (
        <button onClick={handleClick}>Show error toast</button>
    )
}
`;
