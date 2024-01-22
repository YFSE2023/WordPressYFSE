/**
 * External dependencies
 */
import type { StoryFn, Meta } from '@storybook/react';

/**
 * Internal dependencies
 */
import ValidationInputError, { type ValidationInputErrorProps } from '..';
import '../style.scss';
import '../../validation-input-error/style.scss';

export default {
	title: 'External Components/ValidationInputError',
	component: ValidationInputError,
	argTypes: {
		elementId: {
			control: 'null',
			description:
				'The id of this `ValidationInputError` component. The ID is generated by the `wc/store/validation` data store. [See `getValidationErrorId`](https://github.com/woocommerce/woocommerce-blocks/blob/trunk/docs/third-party-developers/extensibility/data-store/validation.md#getvalidationerrorid-errorid-)',
			table: {
				type: {
					summary: 'string',
				},
			},
		},
		errorMessage: {
			control: 'text',
			type: 'string',
			table: {
				type: { summary: 'string' },
			},
		},
		propertyName: {
			control: 'null',
			description:
				'The name of the entry in the `wc/store/validation` data store to show in this component.',
			table: {
				type: {
					summary: 'string',
				},
			},
		},
	},
} as Meta< ValidationInputErrorProps >;

const Template: StoryFn< ValidationInputErrorProps > = ( args ) => {
	return <ValidationInputError { ...args } />;
};

export const Default = Template.bind( {} );
Default.args = {
	errorMessage: 'An error message to show to the user.',
};
