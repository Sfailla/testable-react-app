import React from 'react';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from 'react-jss';
import { theme } from '../styles/theme';
import { StaticRouter } from 'react-router-dom';

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

function wrapWithRouter({ children }) {
	return <StaticRouter>{children}</StaticRouter>;
}

module.exports = {
	shallowWithTheme,
	mountWithTheme,
	wrapWithRouter
};
