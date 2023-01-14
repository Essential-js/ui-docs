export const components = [
	{
		name: 'Empty',
		path: 'empty',
		subComponents: [],
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
		name: 'Form',
		path: 'form',
		subComponents: [
			{
				name: 'Checkbox',
				path: 'form/checkbox',
			},
			{
				name: 'Input',
				path: 'form/input',
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
		name: 'Modals',
		path: 'modals',
		subComponents: [
			{
				name: 'Default',
				path: 'modals/default',
			},
			{
				name: 'Alert',
				path: 'modals/alert',
			},
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
];
