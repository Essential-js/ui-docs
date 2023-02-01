export const components = [
	{
		name: 'Form',
		path: 'form/controller',
		subComponents: [
			{
				name: 'Controller',
				path: 'form/controller',
			},
			{
				name: 'Input',
				path: 'form/input',
			},
			{
				name: 'Validate input',
				path: 'form/validate-input',
			},
			{
				name: 'Switch',
				path: 'form/switch',
			},
			{
				name: 'Textarea',
				path: 'form/textarea',
			},
			{
				name: 'Buttons',
				path: 'form/buttons',
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
				name: 'Confirm',
				path: 'modals/confirm',
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
		name: 'Menu',
		path: 'menu/sidebar',
		subComponents: [
			{
				name: 'Sidebar',
				path: 'menu/sidebar',
			},
			{
				name: 'Table',
				path: 'menu/table',
			},
			{
				name: 'Tooltip',
				path: 'menu/tooltip',
			},
		],
	},

	{
		name: 'Dropdown',
		path: 'dropdown',
		subComponents: [],
	},
];
