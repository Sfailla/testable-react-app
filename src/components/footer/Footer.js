import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
	footer: {
		width: '100%',
		height: '60px',
		color: theme.palette.common.white,
		backgroundColor: theme.palette.tertiary.main,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',

		position: 'absolute',
		bottom: '0',
		left: '0'
	}
}));

function Footer() {
	const classes = useStyles();
	return (
		<div className={classes.footer}>
			<p>created by steven failla &copy; 2020</p>
		</div>
	);
}

export default Footer;
