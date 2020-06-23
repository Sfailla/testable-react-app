import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import App from './App';

const renderWithRouter = component => {
	const history = createMemoryHistory();
	return {
		...render(<Router history={history}>{component}</Router>)
	};
};

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
