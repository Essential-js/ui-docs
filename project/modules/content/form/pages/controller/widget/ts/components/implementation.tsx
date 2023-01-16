export const implementation = `
// Set custom component	   COMPONENT TYPE    COMPONENT
formController.setComponent('validateInput', ValidateInput);

function Implementation() {
   const [formValues, setFormValues] = React.useState('');

	function onChange(event: { target: { name: string; value: string } }) {
		const { name, value } = event.target;
		setFormValues({ ...formValues, [name]: value });
	}

	const template = [
		{
			label: 'Validate input',
			name: 'validateInput',
			isOk: formValues.validateInput,
			message: 'Algo salio mal',
			placeholder: 'text',
			onChange, // Set onChange, you also can set any event or property
			value: formValues.text,
			type: 'validateInput',
		},
		{
			label: 'Input email',
			name: 'email',
			placeholder: 'email',
			onChange,
			value: formValues.email,
			className: 'input-control',
			type: 'email',
		},
		{
			label: 'Input number',
			name: 'number',
			placeholder: 'number',
			onChange,
			value: formValues.number,
			type: 'number',
		},
		{
			label: 'Input tel',
			name: 'tel',
			placeholder: 'tel',
			onChange,
			value: formValues.tel,
			className: 'input-control',
			type: 'tel',
		},
		{
			label: 'Input password',
			name: 'password',
			placeholder: 'password',
			onChange,
			value: formValues.password,
			type: 'password',
		},
	];
    return (
        <Controller template={template} />
    )
}
`;
