export const implementation = `
function Implementation() {
    const [value, setValue] = React.useState('');

	function handleChange(event: { target: { value: string } }) {
		const { value } = event.target;
		setValue(value);
	}

    return (
       <Textarea placeholder="Insert your comments" label="Comment" value={value} onChange={handleChange} />
    )
}
`;
