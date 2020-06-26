import React from 'react';
import { useStyles } from './FooterStyles';

function Footer() {
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<p>created by steven failla &copy; 2020</p>
		</footer>
	);
}

export default Footer;
