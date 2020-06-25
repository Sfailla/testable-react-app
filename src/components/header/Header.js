import React from 'react';
import { createUseStyles } from 'react-jss';
import Navigation from '../nav/Navigation';

const useStyles = createUseStyles(theme => ({
	header: {
		width: '100%',
		height: '50px',
		color: theme.palette.common.white,
		padding: theme.spacing(0, 1),
		backgroundColor: theme.palette.tertiary.main,
		boxShadow: theme.shadows[5],

		position: 'absolute',
		top: '0',
		left: '0'
	},
	navigation: {
		display: 'flex',
		fontWeight: 'bold',
		'& p:not(:last-of-type)': {
			paddingRight: theme.spacing(1)
		}
	},
	wrapper: {
		width: '100%',
		height: '50px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	}
}));

function Header() {
	const classes = useStyles();
	return (
		<header className={classes.header}>
			<div className={classes.wrapper}>
				<h2>Logo</h2>
				<div className={classes.navigation}>
					<Navigation />
				</div>
			</div>
		</header>
	);
}

export default Header;