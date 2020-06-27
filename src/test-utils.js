import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'react-jss';
import { theme } from './styles/theme';

const AllMyProviders = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const MyCustomRender = (component, options) =>
	render(component, { wrapper: AllMyProviders, ...options });

// re-export everything from the `react-testing-library`
export * from '@testing-library/react';

// export our custom render method
export { MyCustomRender as render };
