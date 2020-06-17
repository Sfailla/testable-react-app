import React from 'react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
	list: {
		listStyle: 'none',
		display: 'flex'
	},
	listItem: {
		'& a': {
			color: theme.palette.common.white,
			textDecoration: 'none',
			transition: 'color .2s linear'
		},
		'& a:hover': {
			color: theme.palette.primary.light
		},
		'&:not(:last-of-type)': {
			paddingRight: theme.spacing(1)
		}
	}
}));

function Navigation() {
	const classes = useStyles();
	return (
		<nav>
			<ul className={classes.list}>
				<li className={classes.listItem}>
					<Link to="/">Home</Link>
				</li>
				<li className={classes.listItem}>
					<Link to="/forms">Forms</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
