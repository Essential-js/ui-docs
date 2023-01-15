export const components = [
	{
		name: 'Form',
		path: 'form',
		subComponents: [
			{
				name: 'Input',
				path: 'form/input',
			},
			{
				name: 'Validate input',
				path: 'form/validate-input',
			},
			{
				name: 'Checkbox',
				path: 'form/checkbox',
			},
			{
				name: 'Switch',
				path: 'form/switch',
			},
			{
				name: 'Textarea',
				path: 'form/textarea',
			},
		],
	},
	{
		name: 'Toasts',
		path: 'toast',
		subComponents: [
			{
				name: 'Success',
				path: 'toast/success',
			},
			{
				name: 'Error',
				path: 'toast/error',
			},
			{
				name: 'Info',
				path: 'toast/info',
			},
			{
				name: 'Loading',
				path: 'toast/loading',
			},
		],
	},
	{
		name: 'Modals',
		path: 'modals',
		subComponents: [
			{
				name: 'Info',
				path: 'modals/info',
			},
			{
				name: 'Error',
				path: 'modals/error',
			},
			{
				name: 'Success',
				path: 'modals/success',
			},
		],
	},

	{
		name: 'Empty',
		path: 'empty',
		subComponents: [],
	},
	{
		name: 'Dropdown',
		path: 'dropdown',
		subComponents: [],
	},
];
