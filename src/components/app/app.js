import React from 'react';
import { ThemeProvider } from 'react-jss';
import { theme } from '../../styles/theme';

import HomePage from '../../pages/HomePage';
import FormPage from '../../pages/FormPage';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/forms" component={FormPage} />
				</Switch>
			</Router>
		</ThemeProvider>
	);
};

export default App;
