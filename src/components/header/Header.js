import React from 'react';
import Navigation from '../nav/Navigation';
import { useStyles } from './HeaderStyles';

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
