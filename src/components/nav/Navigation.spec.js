import React from 'react';
import { render } from '../../test-utils';

import Navigation from './Navigation';

jest.mock('react-router-dom', () => ({
	Link: 'a'
}));

describe('<Navigation /> unit tests', () => {
	test('renders <Navigation /> correctly', () => {
		render(<Navigation />);
	});

	test('Link to /home should have correct text value', () => {
		const { getByTestId } = render(<Navigation />);
		const textValue = 'Home';
		const homeLink = getByTestId('home-link');

		expect(homeLink.textContent).toBe(textValue);
	});

	test('home link should have correct url path /', () => {
		const { getByTestId } = render(<Navigation />);
		expect(getByTestId('home-link').firstChild).toHaveAttribute(
			'to',
			'/'
		);
	});

	test('Link to /forms should have correct text value', () => {
		const { getByTestId } = render(<Navigation />);
		const textValue = 'Forms';
		const formLink = getByTestId('form-link');

		expect(formLink.textContent).toBe(textValue);
	});

	test('forms link should have correct url path /forms', () => {
		const { getByTestId } = render(<Navigation />);
		expect(getByTestId('form-link').firstChild).toHaveAttribute(
			'to',
			'/forms'
		);
	});
});
