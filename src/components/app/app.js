import React from 'react';
import { ThemeProvider } from 'react-jss';
import { theme } from '../../styles/theme';

import HomePage from '../../pages/HomePage';
import FormPage from '../../pages/FormPage';
import Header from '../header/Header';
import Footer from '../footer/Footer';
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
