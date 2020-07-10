import React from 'react';
import { mountWithTheme } from '../../test-utils/helpers';
import { render, fireEvent } from '../../test-utils';

import { Button, ButtonGroup } from './Button';

const mockFn = jest.fn();
const props = {
	text: 'click me',
	variant: 'round',
	onClick: mockFn
};

// testing with ENZYME
describe('<Button /> unit tests', () => {
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

// Testing with TESTING LIBRARY
describe('<Button /> unit test', () => {
	// it is recommended to search for button using screen.getByRole query.  this is done by
	// screen.getByRole('button', {name: /submit/i})

	it('should render <Button /> component without errors', () => {
		render(<Button {...props} />);
	});

	it('Button text value should be correct', () => {
		const { queryByText } = render(<Button {...props} />);
		expect(queryByText('click me')).toBeTruthy();
	});

	it('text value of Button should change', () => {
		const { queryByText, rerender } = render(<Button {...props} />);
		expect(queryByText('click me')).toBeTruthy();

		const textValue = 'go back';
		rerender(<Button {...props} text={textValue} />);
		expect(queryByText(textValue)).toBeTruthy();
	});

	it('should call mockFn when clicked', () => {
		const { onClick } = props;
		const { getByText } = render(
			<Button {...props} onClick={onClick} />
		);
		fireEvent.click(getByText(props.text));
		expect(onClick).toHaveBeenCalled();
	});

	it('should match snapshot', () => {
		const { container } = render(<Button {...props} />);
		expect(container).toMatchSnapshot();
	});
});

describe('<ButtonGroup /> unit tests', () => {
	it('should render <ButtonGroup /> correctly', () => {
		render(<ButtonGroup />);
	});

	it('should match snapshot', () => {
		const { container } = render(<ButtonGroup />);
		expect(container).toMatchSnapshot();
	});
});
