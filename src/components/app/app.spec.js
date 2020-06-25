import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

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
