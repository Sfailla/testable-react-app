import React from 'react';
import { renderWithRouter } from '../../test-utils';

import Navigation from './Navigation';

describe('<Navigation /> unit tests', () => {
	it('renders <Navigation /> correctly', () => {
		renderWithRouter(<Navigation />);
	});

	it('should render 2 Link elements', () => {
		const { getByTestId, container, debug } = renderWithRouter(
			<Navigation />
		);
		const nav = getByTestId('nav');
		const homeLink = getByTestId('home-link');
		const formLink = getByTestId('form-link');

		expect(nav).toBeInTheDocument();
	});
});
