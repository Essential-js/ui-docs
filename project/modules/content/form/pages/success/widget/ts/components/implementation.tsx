export const implementation = `
function Implementation() {
    function handleClick() {
        toast.success('Something went right', 4000); // Duration, This works on all types
    }

    return (
        <button onClick={handleClick}>Show success toast</button>
    )
}
`;
