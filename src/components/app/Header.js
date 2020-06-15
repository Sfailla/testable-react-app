import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
	header: {
		width: '100%',
		height: '50px',
		backgroundColor: theme.palette.tertiary.main,
		padding: theme.spacing(0, 1),
		color: theme.palette.common.white,
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

const Header = () => {
	const classes = useStyles();
	return (
		<header className={classes.header}>
			<div className={classes.wrapper}>
				<h2>Logo</h2>
				<div className={classes.navigation}>
					<p>Home</p>
					<p>About</p>
				</div>
			</div>
		</header>
	);
};

export default Header;
