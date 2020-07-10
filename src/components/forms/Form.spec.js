import React from 'react';
import { render } from '../../test-utils';

import { Form, FormGroup, FormLabel, FormInput } from './Form';

describe('<Form /> unit tests', () => {
	test('should render a form component without error', () => {
		render(<Form />);
	});
});

describe('<FormGroup /> unit tests', () => {
	test('should render a FormGroup component without error', () => {
		render(<FormGroup />);
	});
});

describe('<FormLabel /> unit tests', () => {
	const props = {
		text: 'Username',
		htmlFor: 'user_name'
	};

	test('should render a FormLabel component and props without error', () => {
		render(<FormLabel {...props} />);
	});

	test('FormLabel should have the correct text prop value', () => {
		const { debug, container } = render(<FormLabel {...props} />);
	});
});

describe('<FormInput /> unit tests', () => {
	const props = {
		type: 'text',
		name: 'Steven',
		placeholder: 'enter username'
	};

	test('should render a FormInput component and props without error', () => {
		render(<FormInput {...props} />);
	});
});
