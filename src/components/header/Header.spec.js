import React from 'react';
import { render, renderWithRouter } from '../../test-utils';

import Header from './Header';

describe('<Header /> unit tests', () => {
	it('should render <Header /> correctly', () => {
		renderWithRouter(<Header />);
	});

	it('should contain h2 tag with correct text value', () => {
		const { getByText } = render(renderWithRouter(<Header />));
		expect(getByText(/logo/i)).toBeInTheDocument();
	});

	it('should contain <header> element', () => {
		const { getByTestId } = render(renderWithRouter(<Header />));
		const header = getByTestId('header');
		expect(header).toBeInTheDocument();
	});

	it('should take a snapshot of component', () => {
		const { container } = render(renderWithRouter(<Header />));
		expect(container).toMatchSnapshot();
	});
});
