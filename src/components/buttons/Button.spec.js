import React from 'react';
import { mountWithTheme } from '../../mocks/themeMock';

import { Button, ButtonGroup } from './Button';

describe('<Button /> unit tests', () => {
	const mockFn = jest.fn();
	const props = {
		text: 'click me',
		variant: 'round',
		onClick: mockFn
	};

	it('should render Button 1 time', () => {
		const wrapper = mountWithTheme(<Button {...props} />);
		expect(wrapper.find('Button')).toHaveLength(1);
	});

	it('<Button /> should contain button element', () => {
		const wrapper = mountWithTheme(<Button {...props} />);
		expect(wrapper.find('button')).toHaveLength(1);
	});

	it('should change text prop from original value to a new value', () => {
		const wrapper = mountWithTheme(<Button {...props} />);
		wrapper.setProps({ text: 'go back' });
		expect(wrapper.props().text).toEqual('go back');
	});

	it('should call mockFn when clicked', () => {
		const wrapper = mountWithTheme(<Button {...props} />);
		wrapper.find('Button').simulate('click');
		expect(mockFn).toHaveBeenCalled();
	});

	it('should match snapshot', () => {
		const wrapper = mountWithTheme(<Button {...props} />);
		expect(wrapper).toMatchSnapshot();
	});
});

describe('<ButtonGroup /> unit tests', () => {
	it('should render <ButtonGroup /> 1 time', () => {
		const wrapper = mountWithTheme(<ButtonGroup />);
		expect(wrapper.find('ButtonGroup')).toHaveLength(1);
	});

	it('<ButtonGroup /> should contain <div> tag', () => {
		const wrapper = mountWithTheme(<ButtonGroup />);
		expect(wrapper.find('div')).toHaveLength(1);
	});

	it('should match snapshot', () => {
		const wrapper = mountWithTheme(<ButtonGroup />);
		expect(wrapper).toMatchSnapshot();
	});
});
