import React from 'react';
import { useStyles } from './FormStyles';

function Form({ children, ...otherProps }) {
	const classes = useStyles();
	return (
		<form className={classes.form} {...otherProps}>
			{children}
		</form>
	);
}

function FormGroup({ children }) {
	const classes = useStyles();
	return <div className={classes.formGroup}>{children}</div>;
}

function FormLabel({ text, ...otherProps }) {
	const classes = useStyles();
	return (
		<label className={classes.label} {...otherProps}>
			{text}
		</label>
	);
}

function FormInput({ ...otherProps }) {
	const classes = useStyles();
	return <input className={classes.input} {...otherProps} />;
}

export { Form, FormGroup, FormLabel, FormInput };
