import React from 'react';
import { createUseStyles } from 'react-jss';
import HomePageCard from '../components/cards/HomePageCard';

const useStyles = createUseStyles(theme => ({
	root: {
		paddingTop: theme.spacing(10),
		textAlign: 'center'
	},
	heading: {
		color: theme.palette.tertiary.main
	}
}));

function HomePage() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<h1 className={classes.heading}>Welcome To Testable React!</h1>
			<HomePageCard />
		</div>
	);
}

export default HomePage;
