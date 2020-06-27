import React from 'react';
import { render } from '../../test-utils';
import { mountWithTheme } from '../../test-utils/helpers.js';
import toJson from 'enzyme-to-json';

import Footer from './Footer';

let wrapper;

beforeEach(() => {
	wrapper = mountWithTheme(<Footer />);
});

describe('<Footer /> component unit tests', () => {
	it('should render 1 <Footer /> component', () => {
		expect(wrapper.find(Footer)).toHaveLength(1);
	});

	it('should take snapshot that matches component', () => {
		let tree = toJson(wrapper);
		expect(tree).toMatchSnapshot();
	});

	it('should have the same text value as component', () => {
		const text = `created by steven failla ${'&copy;'} 2020`;
		// for decoding html entity.  &copy;
		let elem = document.createElement('textarea');
		elem.innerHTML = text;
		let decoded = elem.value;
		expect(wrapper.find('p').text()).toEqual(decoded);
	});
});

describe('<Footer> unit tests', () => {
	it('renders the footer without error', () => {
		render(<Footer />);
	});

	it('should render footer with correct text', () => {
		const { getByText } = render(<Footer />);
		const text = 'created by steven failla &copy; 2020';
		// for decoding html entity.  &copy;
		let elem = document.createElement('textarea');
		elem.innerHTML = text;
		let decoded = elem.value;
		expect(getByText(decoded)).toBeTruthy();
	});

	it('should take a snapshot', () => {
		const { asFragment } = render(<Footer />);
		expect(asFragment(<Footer />)).toMatchSnapshot();
	});
});
