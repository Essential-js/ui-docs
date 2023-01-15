export const config = `
function App() {
    // The toast component is the only setup
    return (
        <main>
            <Toasts className="toast-list" position={{bottom: '2rem', right: '2rem'}} />
        </main>
    )
}
`;

export const implementation = `
function Implementation() {
    function handleClick() {
        toast.info('Here goes your message');
    }

    return (
        <button onClick={handleClick}>Show toast</button>
    )
}
`;
