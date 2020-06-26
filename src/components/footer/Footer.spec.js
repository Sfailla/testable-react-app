import React from 'react';
import { mountWithTheme } from '../../mocks/themeMock';
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

	it('should render footer component with 1 <footer> and 1 <p> tag', () => {
		expect(wrapper.find('footer')).toHaveLength(1);
		expect(wrapper.find('p')).toHaveLength(1);
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
