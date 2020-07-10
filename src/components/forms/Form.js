import React from 'react';
import { useStyles } from './FormStyles';
import PropTypes from 'prop-types';

function Form({ children, ...otherProps }) {
	const classes = useStyles();
	return (
		<form className={classes.form} {...otherProps}>
			{children}
		</form>
	);
}

Form.propTypes = {
	children: PropTypes.array
};

function FormGroup({ children }) {
	const classes = useStyles();
	return <div className={classes.formGroup}>{children}</div>;
}

FormGroup.propTypes = {
	children: PropTypes.array
};

function FormLabel({ text, ...otherProps }) {
	const classes = useStyles();
	return (
		<label className={classes.label} {...otherProps}>
			{text}
		</label>
	);
}

FormLabel.propTypes = {
	text: PropTypes.string.isRequired,
	htmlFor: PropTypes.string.isRequired
};

function FormInput({ ...otherProps }) {
	const classes = useStyles();
	return <input className={classes.input} {...otherProps} />;
}

FormInput.propTypes = {
	type: PropTypes.string,
	type: PropTypes.oneOf([ 'text', 'password', 'number' ]),
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string
};

export { Form, FormGroup, FormLabel, FormInput };
