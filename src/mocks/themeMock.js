import React from 'react';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from 'react-jss';
import { theme } from '../styles/theme';

function shallowWithTheme(child) {
	return shallow(child, {
		wrappingComponent: ({ children }) => (
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		)
	});
}

function mountWithTheme(child) {
	return mount(child, {
		wrappingComponent: ({ children }) => (
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		)
	});
}

module.exports = {
	shallowWithTheme,
	mountWithTheme
};
