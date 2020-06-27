import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// TESTING APP
describe('App', () => {
	it('renders App without error', () => {
		render(<App />);
	});

	it('should take a snapshot', () => {
		const { asFragment } = render(<App />);
		expect(asFragment(<App />)).toMatchSnapshot();
	});
});
