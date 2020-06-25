import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

describe('<Footer /> component unit tests', () => {
	it('should render 1 <Footer /> component', () => {
		const wrapper = shallow(<Footer />);
		expect(wrapper).toHaveLength(1);
	});

	// it()
});
