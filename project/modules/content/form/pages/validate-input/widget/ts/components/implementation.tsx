export const implementation = `
const ERROR_MESSAGE = 'Error, value is too short'
const REGEX = /.{5,16}/;
function Implementation() {
    const [value, setValue] = React.useState('');

	function onChange(event: { target: { value: string } }) {
		const { value } = event.target;
		setValue(value);
	}

    const isOk = REGEX.test(value);
    return (
        <ValidateInput value={value} isOk={isOk} message={ERROR_MESSAGE} onChange={onChange} placeholder="Software Enginner" label="Work" />
    )
}
`;

export const passwordImplementation = `
const ERROR_MESSAGE = 'Error, password is too short'
const REGEX = /.{8,16}/;
function Implementation() {
    const [value, setValue] = React.useState('');

	function onChange(event: { target: { value: string } }) {
		const { value } = event.target;
		setValue(value);
	}

    const isOk = REGEX.test(value);
    return (
        <ValidateInput value={value} type="password" isOk={isOk} message={ERROR_MESSAGE} onChange={onChange} placeholder="Software Enginner" label="Work" />
    )
}
`;
