import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
	buttonGroup: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		paddingTop: theme.spacing(5)
	},
	square: {
		width: '49%',
		height: '40px',
		textTransform: 'uppercase',
		fontWeight: 'bold',
		color: theme.palette.common.white,
		backgroundColor: theme.palette.tertiary.main
	}
}));

function Button({ text, variant, ...otherProps }) {
	const classes = useStyles();
	return (
		<button className={classes[variant]} {...otherProps}>
			{text}
		</button>
	);
}

function ButtonGroup({ children }) {
	const classes = useStyles();
	return <div className={classes.buttonGroup}>{children}</div>;
}

export { Button, ButtonGroup };
