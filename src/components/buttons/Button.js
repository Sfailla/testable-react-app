import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

const useStyles = createUseStyles(theme => ({
	buttonGroup: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		paddingTop: theme.spacing(5)
	},
	square: {
		border: 'none',
		outline: 'none',
		fontWeight: 'bold',
		letterSpacing: '3px',
		textTransform: 'uppercase'
	}
}));

function Button({ text, variant, className, ...otherProps }) {
	const classes = useStyles();
	const withClassName = `${classes[variant]} ${className || ''}`;

	return (
		<button className={withClassName} {...otherProps}>
			{text}
		</button>
	);
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	variant: PropTypes.string,
	onClick: PropTypes.func
};

function ButtonGroup({ children }) {
	const classes = useStyles();
	return <div className={classes.buttonGroup}>{children}</div>;
}

ButtonGroup.propTypes = {
	children: PropTypes.array
};

export { Button, ButtonGroup };
