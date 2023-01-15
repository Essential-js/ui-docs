export const implementation = `
function Implementation() {
    function handleClick() {
        // Here apply the toast duration
        const loadingToast = toast.loading('Here goes your message', 90000);

        setTimeout(() => {
            toast.remove(loadingToast);
        }, 2000)
    }

    return (
        <button onClick={handleClick}>Show toast</button>
    )
}
`;
