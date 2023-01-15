export const implementation = `
function Implementation() {
    const [checked, setChecked] = React.useState(false);

	function toggleChecked() {
		setChecked(!checked);
	}

    return (
        <Switch onClick={toggleChecked} checked={checked} />
    )
}
`;
