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
		text: 'username',
		htmlFor: 'user_name'
	};

	test('should render a FormLabel component and props without error', () => {
		render(<FormLabel {...props} />);
	});

	test('FormLabel should assign the correct text prop value', () => {
		const { getByText } = render(<FormLabel {...props} />);
		const text = 'username';
		expect(getByText(props.text).textContent).toBe(text);
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

test('should work all together', () => {
	render(
		<Form>
			<FormGroup>
				<FormLabel text="Login Form" htmlFor="login" />
				<FormInput
					type="text"
					name="login"
					placeholder="please enter login"
				/>
				<FormLabel text="Pasword Form" htmlFor="login" />
				<FormInput
					type="password"
					name="password"
					placeholder="please enter password"
				/>
			</FormGroup>
		</Form>
	);
});
