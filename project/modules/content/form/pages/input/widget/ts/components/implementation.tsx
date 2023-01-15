export const implementation = `
function Implementation() {
    const [value, setValue] = React.useState('');

	function onChange(event: { target: { value: string } }) {
		const { value } = event.target;
		setValue(value);
	}

    return (
        <Input value={value} onChange={onChange} placeholder="Software Enginner" label="Work" />
    )
}
`;
