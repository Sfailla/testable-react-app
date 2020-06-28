import React from 'react';
import { render } from '../../test-utils';

import Header from './Header';

jest.mock('react-router-dom', () => ({ Link: 'Link' }));
jest.mock('../nav/Navigation', () => () => {
	return <nav>Navigation</nav>;
});

describe('<Header /> unit tests', () => {
	it('should render <Header /> correctly', () => {
		render(<Header />);
	});

	it('should contain h2 tag with correct text value', () => {
		const { getByText } = render(<Header />);
		expect(getByText(/logo/i)).toBeInTheDocument();
	});

	it('should contain <header> element', () => {
		const { getByTestId } = render(<Header />);
		const header = getByTestId('header');
		expect(header).toBeInTheDocument();
	});

	it('should take a snapshot of component', () => {
		const { container } = render(<Header />);
		expect(container).toMatchSnapshot();
	});
});
