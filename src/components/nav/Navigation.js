import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './NavigationStyles';

function Navigation() {
	const classes = useStyles();
	return (
		<nav>
			<ul className={classes.list}>
				<li data-testid="home-link" className={classes.listItem}>
					<Link to="/">Home</Link>
				</li>
				<li data-testid="form-link" className={classes.listItem}>
					<Link to="/forms">Forms</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
