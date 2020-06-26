import React from 'react';
import { shallow, mount } from 'enzyme';
import {
	shallowWithTheme,
	mountWithTheme
} from '../../mocks/themeMock';

import Footer from './Footer';

describe('<Footer /> component unit tests', () => {
	it('should render 1 <Footer /> component', () => {
		const wrapper = mountWithTheme(<Footer />);
		expect(wrapper.find(Footer)).toHaveLength(1);
	});

	it('should render footer component with 1 <footer> and 1 <p> tag', () => {
		const wrapper = mountWithTheme(<Footer />);
		expect(wrapper.find('footer')).toHaveLength(1);
		expect(wrapper.find('p')).toHaveLength(1);
	});

	it('should have the same text value as component', () => {
		const wrapper = mountWithTheme(<Footer />);
		const text = 'created by steven failla &copy; 2020';
		expect(wrapper.find('p').text()).toEqual(text);
	});
});
