import React from 'react';
import { renderWithRouter } from '../../test-utils';

import Navigation from './Navigation';

describe('<Navigation /> unit tests', () => {
	it('renders <Navigation /> correctly', () => {
		renderWithRouter(<Navigation />);
	});

	it('Link should have same text value as component', () => {
		const { getByTestId } = renderWithRouter(<Navigation />);
		const textValue = 'Home';
		const homeLink = getByTestId('home-link');

		expect(homeLink.textContent).toEqual(textValue);
	});
	it('Link should have same text value as component', () => {
		const { getByTestId } = renderWithRouter(<Navigation />);
		const textValue = 'Forms';
		const formLink = getByTestId('form-link');

		expect(formLink.textContent).toEqual(textValue);
	});
});
