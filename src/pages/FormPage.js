import React from 'react';
import { createUseStyles } from 'react-jss';

import FormCard from '../components/cards/FormCard';

const useStyles = createUseStyles(theme => ({
	title: {
		paddingTop: theme.spacing(2),
		color: theme.palette.tertiary.main
	}
}));

function FormPage() {
	const classes = useStyles();
	return (
		<div>
			<h1 className={classes.title}>Forms 🗒️</h1>
			<div className="form-container">
				<FormCard />
			</div>
		</div>
	);
}

export default FormPage;
