import { defineOperationApp } from '@directus/extensions-sdk';

export default defineOperationApp({
	id: 'bizprint-sign',
	name: 'BizPrint API Sign',
	icon: 'print',
	description: 'Sign input for use in BizPrint API',
	overview: ({ text }) => [
		{
			label: 'Text',
			text: text,
		},
	],
	options: [
		{
			field: 'public_key',
			name: 'Public key',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'input',
			},
		},
		{
			field: 'secret_key',
			name: 'Secret key',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'input',
			},
		},
		{
			field: 'json_data',
			name: 'Payload',
			type: 'json'
		}
	],
});
