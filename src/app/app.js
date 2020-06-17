import React from 'react';
import { ThemeProvider } from 'react-jss';
import { theme } from '../styles/theme';

import HomePage from '../pages/HomePage';
import FormPage from '../pages/FormPage';
import Header from './Header';
import Footer from './Footer';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/forms" component={FormPage} />
				</Switch>
				<Footer />
			</Router>
		</ThemeProvider>
	);
}

export default App;
